var frmvalidator  = new Validator("quoteRequest");
frmvalidator.addValidation("firstName","req","required");
frmvalidator.addValidation("firstName","alpha_s","please use letters and spaces only");
frmvalidator.addValidation("firstName","maxlen=20","maximum 20 characters");
frmvalidator.addValidation("lastName","req","required");
frmvalidator.addValidation("lastName","alpha_s","please use letters and spaces only");
frmvalidator.addValidation("lastName","maxlen=20","maximum 20 characters");
frmvalidator.addValidation("company","maxlen=50","maximum 50 characters");
frmvalidator.addValidation("email","req","required");
frmvalidator.addValidation("email","maxlen=50","maximum 50 characters");
frmvalidator.addValidation("email","email","please enter a valid email");
frmvalidator.addValidation("telephone","maxlen=20","maximum 20 characters");
frmvalidator.addValidation("message","req","please add a message");
frmvalidator.setAddnlValidationFunction(checkCheckBoxes);
frmvalidator.EnableOnPageErrorDisplay();
frmvalidator.EnableMsgsTogether();

var frm = document.forms["quoteRequest"]

function checkCheckBoxes() {
	if (
	frm.quoteSelection1.checked == false &&
	frm.quoteSelection2.checked == false &&
	frm.quoteSelection3.checked == false) {
		sfm_show_error_msg("required",frm.quoteSelection1);
		return false;
	} else { 	
		return true;
	}
};
function clearError(val) {
	var txt = val.length;
	if (txt != 0 || $("#message").is(":focus")) {
    	$("#mContainer span").hide();
    } else {
    	$("#mContainer span").show();
    }
}
