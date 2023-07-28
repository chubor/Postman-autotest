pm.test("ждем статус 200", function () {
    pm.response.to.have.status(200);
});

pm.test("проверка на скорость ответа, ждем 150", function () {
    pm.expect(pm.response.responseTime).to.be.below(150);
});


pm.test("Тело соответствует строке", function () {
	pm.expect(pm.response.text()).to.include("");
});

pm.test("тестовый поиск на наличие 1223", function () {
    pm.expect(pm.response.text()).to.include("1234");
});