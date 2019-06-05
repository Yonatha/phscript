import * as vscode from 'vscode';

async function GenerateModel(): Promise<void> {
	// vscode.window.setStatusBarMessage(modelName);
	// vscode.window.showInformationMessage(modelName);
	// vscode.window.showErrorMessage("Você precisa informar o nome do model");
	const txtModelNameOption = {
		value: "",
		prompt: "Gerar novo Model",
		placeHolder: "Exemplo: Purchase",
		password: false,
		validateInput: (text: string): string | undefined => {
			if (!text) {
				return 'Você precisa informar o nome do model';
			}
		}
	};

	const modelNameValue = await vscode.window.showInputBox(txtModelNameOption).then(
		value => {
			return value;
		});

	const txtModelAttributesOption = {
		value: "",
		prompt: `Informe o(s) atributos para o model ${modelNameValue}`,
		placeHolder: "Exemplo: name category description",
		password: false,
		validateInput: (text: string): string | undefined => {
			if (!text) {
				return 'Você precisa informar um atributo';
			}
		}
	};

	const modelAttributesValue = await vscode.window.showInputBox(txtModelAttributesOption).then(
		value => {
			return value;
		});
	vscode.window.showInformationMessage(`${modelNameValue}Model.wmls gerado com sucesso`);

	console.log(modelNameValue);
	console.log(modelAttributesValue);



}


export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.generateModel', function () {
		GenerateModel()
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }