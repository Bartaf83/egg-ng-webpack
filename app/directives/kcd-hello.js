import registerKcdHelloTest from './kcd-hello.test';

export default ngModule => {

    if (ON_TEST) {
        registerKcdHelloTest(ngModule);
    }

    ngModule.directive('kcdHello', ($log) => {
        require('./kcd-hello.css');
        return {
            restrict: 'E',
            scope: {},
            template: require('./kcd-hello.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;
                vm.greeting = 'hello webpack!!!!!!!!!';

                $log.info('i have some infos!!');
            }
        }
    });
};
