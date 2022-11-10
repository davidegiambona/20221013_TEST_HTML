var number = 0;

function takeNumberAndEdit() {
    document.write("numero originario: ", number, ", ");
    var numberChanged = 13;
    number = numberChanged;
    document.write("\n numero cambiato: ", number);
}
takeNumberAndEdit();
