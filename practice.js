/* ---------- MONACO CONFIG ---------- */
require.config({
    paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.1/min/vs"
    }
});

let editor;

require(["vs/editor/editor.main"], function () {
    editor = monaco.editor.create(document.getElementById("editor"), {
        value: "# Write your code here",
        language: "python",
        theme: "vs-dark",
        automaticLayout: true
    });
});

/* ---------- RUN CODE ---------- */
function runCode() {
    if (!editor) return;

    const lang = document.getElementById("language").value;
    const code = editor.getValue();
    const output = document.getElementById("output");

    output.textContent = "";

    // JavaScript
    if (lang === "javascript") {
        try {
            const result = eval(code);
            output.textContent = result ?? "JS executed successfully.";
        } catch (err) {
            output.textContent = err.toString();
        }
    }

    // Python
    if (lang === "python") {
        Sk.configure({
            output: text => {
                output.textContent += text;
                output.scrollTop = output.scrollHeight;
            },
            read: file => {
                if (!Sk.builtinFiles || !Sk.builtinFiles["files"][file]) {
                    throw "File not found: " + file;
                }
                return Sk.builtinFiles["files"][file];
            }
        });

        Sk.misceval.asyncToPromise(() =>
            Sk.importMainWithBody("<stdin>", false, code, true)
        ).catch(err => {
            output.textContent = err.toString();
        });
    }
}

/* ---------- LANGUAGE SWITCH ---------- */
document.getElementById("language").addEventListener("change", function () {
    if (!editor) return;

    const lang = this.value;

    monaco.editor.setModelLanguage(
        editor.getModel(),
        lang === "python" ? "python" : "javascript"
    );

    document.getElementById("editor-lang").innerText = lang.toUpperCase();
});
