import{test,expect}from "@playwright/test"


test("TC-COMPRA-01 - Carrito de Compras",async({page})=>{

//Paso 1: Abrir la URL    
await page.goto("https://practicesoftwaretesting.com/");
//validar que el titulo corresponda a la pagina que he abierto
await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

//Paso 2: Clic en el boton de login
await page.getByTestId("nav-sign-in").click();
//Paso 3: Ingresar el usuario y contraseña
await page.getByTestId("email").fill("customer2@practicesoftwaretesting.com");
await page.getByTestId("password").fill("welcome01");
//Paso 4: Clic en el boton de login
await page.getByTestId("login-submit").click();

//paso 5: Validar que el usuario se logueo correctamente
//page-title=My account
await expect(page.getByTestId("page-title")).toContainText("Mi cuenta");

//clic en inicio
await page.getByTestId("nav-home").click();

//buscar producto "Hammer"
await page.getByTestId("search-query").fill("Hammer");

//clic en buscar
await page.getByTestId("search-submit").click();

//Seleccionar uno de los productos de manera aleatoria

// 1. Obtengo todo el contenedor de tarjetas una vez que el data-test="search_completed"
const tarjetas = page.locator('[data-test="search_completed"] a.card');

await expect(tarjetas.first()).not.toHaveText('');
// 2. Contar cuántas tarjetas hay disponibles en la página
const cantidadTarjetas = await tarjetas.count();

if (cantidadTarjetas > 0) {
// 3. Generar un índice aleatorio entre 0 y el total de tarjetas (menos 1)
const randomIndex = Math.floor(Math.random() * cantidadTarjetas);
        
// 4. Hacer clic en la tarjeta seleccionada al azar
await tarjetas.nth(randomIndex).click();
} 
else {
throw new Error('No se encontraron tarjetas de productos.');
}

// Añadir al carrito

await page.getByTestId("add-to-cart").click();

// Verifica que se muestre mensaje de agregado
const toast = page.getByRole('alert', { name: 'Producto añadido al carrito.' });
await expect(toast).toBeVisible();

//clic en Inicio para añadir nuevo producto
await page.getByTestId("nav-home").click();
    
//buscar producto "Ruler"
 await page.getByTestId("search-query").fill("Ruler");

//clic en buscar
await page.getByTestId("search-submit").click();

//Seleccionar uno de los productos de manera aleatoria

// 1. Obtengo todo el contenedor de tarjetas una vez que el data-test="search_completed"
const tarjetas2 = page.locator('[data-test="search_completed"] a.card');

await expect(tarjetas2.first()).not.toHaveText('');
// 2. Contar cuántas tarjetas hay disponibles en la página
const cantidadTarjetas2 = await tarjetas2.count();

if (cantidadTarjetas2 > 0) {
// 3. Generar un índice aleatorio entre 0 y el total de tarjetas (menos 1)
const randomIndex = Math.floor(Math.random() * cantidadTarjetas2);
        
// 4. Hacer clic en la tarjeta seleccionada al azar
await tarjetas2.nth(randomIndex).click();
} 
else {
throw new Error('No se encontraron tarjetas de productos.');
}

// Añadir al carrito

await page.getByTestId("add-to-cart").click();

// Verifica que se muestre mensaje de agregado
const toast2 = page.getByRole('alert', { name: 'Producto añadido al carrito.' });
await expect(toast2).toBeVisible();

// clic en Inicio para añadir nuevo producto
await page.getByTestId("nav-home").click();
    
// clic en Carrito de Compras
await page.getByTestId("nav-cart").click();


});
