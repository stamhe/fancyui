
export default class AlertController {
	constructor($state,$scope, AlertService) {
		'ngInject'
		this.AlertService = AlertService;
		$scope.myAlert = this.myAlert.bind(this);
		$scope.myAlertWithHint = this.myAlertWithHint.bind(this);
		$scope.myConfirm = this.myConfirm.bind(this);
		window.state = $state;
		console.log('$state',$state.params.lang);
	}

	myAlert() {
		this.AlertService
			.alert({
				title: "测试",
				content: "你好，我是警告"
			})
			.then(function () {
				alert("你刚才点了确定");
			});
	}

	myAlertWithHint() {
		this.AlertService
			.alert({
				title: "测试",
				content: "你好，我是警告",
				hint: ["操作提示1", "如果想要在操作的时候给点提示，那就写在这里"]
			})
			.then(function () {
				alert("你刚才点了确定");
			});
	}

	myConfirm() {
		this.AlertService
			.confirm({
				title: "测试",
				contents: ["你好，确定要删除以下内容吗？", "aaa, bbb"]
			})
			.then(function () {
				alert("你刚才点了确定");
			}, function () {
				alert("你刚才点了取消");
			});
	}
}