const addInnerHtml = `
<form class="create-user-form">
<label>
Имя
<input type="text" name="userName"
placeholder="Введите ваше имя">
</label>
<label>
Пароль
<input type="password" name="password"
placeholder="Придумайте Пароль">
</label>
<button type="submit">
Подтвердить
</button>
</form>
`;
document.body.innerHTML = addInnerHtml;

////////////////////////////////

const body = document.body;


const form = document.createElement('form');
form.className = "create-user-form";
body.append(form)

const label = document.createElement('label');
label.textContent = "Имя";
form.append(label);

const input = document.createElement('input');
input.type = "text";
input.name = "username";
input.placeholder = "Введите ваше имя";
label.append(input);

const labelPassword = document.createElement('label');
labelPassword.textContent = "Пароль";
form.append(labelPassword);

const inputlabelPassword = document.createElement('input');
inputlabelPassword.type = "password";
inputlabelPassword.name = "password";
inputlabelPassword.placeholder = "Придумайте Пароль";
labelPassword.append(inputlabelPassword);

const button = document.createElement('button');
button.type = "submit";
button.innerText = "Подтвердить";
form.append(button);