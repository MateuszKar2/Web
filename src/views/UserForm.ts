export class UserForm {
    parent: Element

    temlate(): string {
        return`
            <div>
              <h1>User Form</h1>
              <input/>
            </div>
        `;
    }

    render(): void {
        const temlateElement = document.createElement('template');
    }
}