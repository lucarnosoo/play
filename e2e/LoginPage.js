import { Selector } from "testcafe";

fixture("Prueba de Login Lucas")
    .page("https://www.saucedemo.com/");

test("Login con usuario y contraseña correctos"), async t => {
    await t.typetext("#user-name", "standard_user")
    await t.typetext("#password", "secret_sauce")
    await t.click("#login-button")
    await t.expect(Selector(".title").withtext("Products").exists).ok();

}