const vscode = require("vscode");
const editor = vscode.window.activeTextEditor;

async function GenerateModel() {
	//const text = editor.document.getText(editor.selection);

	const txtModelNameOption = {
		value: "",
		prompt: "Nome do model",
		placeHolder: "Ex: Customer",
		password: false
	};

	const txtModelNameValue = await vscode.window.showInputBox(txtModelNameOption).then((modelNameValue) => {
		if (modelNameValue !== undefined && modelNameValue.length > 0) {
			vscode.window.showInformationMessage(`${modelNameValue}Model gerado com sucesso`);
		} else {
			vscode.window.showErrorMessage("Você precisa informar o nome do model");
		}
	});
	vscode.window.showErrorMessage("Você precisa informar o nome do model");
	console.log("Hello")
}

function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.generateModel', function () {
		GenerateModel()
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// function deactivate() { }
// exports.deactivate = deactivate;
