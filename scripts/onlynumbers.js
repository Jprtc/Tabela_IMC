function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    //if (charCode > 31 && (charCode < 48 || charCode > 57))
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}



//se precisar de decimais troque o IF por isso: if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
