export default ngModule => {
	describe('kcd-hello', () => {
		beforeEach(window.module(ngModule.name));

		it('Should test properly', () => {
			expect(true).to.be.true;
		})
	})
};