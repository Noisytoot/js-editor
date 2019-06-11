let editor = CodeMirror(document.getElementById("evalBox"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "material",
    indentUnit: 4,
    gutters: ["CodeMirror-lint-markers"],
    lint: true
});

editor.setValue("/*jshint esversion: 6 */");

function evalInput() {
    let code = editor.getValue();
    eval(code);
}

let version = "v1.0.0";
function help() {
    alert(`JavaScript editor ${version}
    Type JavaScript in the box
    Use Alt+G to jump to line
    Use Ctrl+Z to undo
    Use Ctrl+Shift+Z to redo
    Use Ctrl+F to search
    Press run to run`);
}

// Indentation:
editor.setOption("extraKeys", {
    Tab: (cm) => {
        let spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
        cm.replaceSelection(spaces);
    }
});
