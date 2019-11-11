var userAccount

window.addEventListener('load', function() {
	if (typeof web3 !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
		if (web3.currentProvider.isMetaMask == true) {
			// "MetaMask可用"
		} else {
			// "非MetaMask环境"
		}
		web3.eth.getAccounts(function (err, accounts) {
			if (accounts.length == 0) {
				alert('请检查钱包是否解锁!')
			} else {
				userAccount = accounts[0]
				
				alert(userAccount, 'info')
			}
		});
	} else {
		alert('请安装MetaMask!')
	}
})

function alert(html, style, autoclose, position, openCbk, clodeCbk) {
	style= style===undefined ? 'error' : style,
	autoclose= autoclose===undefined ? 5000 : autoclose,
	position= position===undefined ? 'bottom-left' : position
	spop({
		template: html,
		group: 'submit-satus',
		style: style,
		autoclose: autoclose,
		position: position,
		onOpen: function () {
			if (typeof openCbk === 'function') {
				openCbk()
			}
		},
		onClose: function() {
			if (typeof clodeCbk === 'function') {
				clodeCbk()
			}
		}
	});
}