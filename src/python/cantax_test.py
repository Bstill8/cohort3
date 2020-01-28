import cantax

def test_cantax():
    assert cantax.fedTax(100) == 15
    assert cantax.fedTax(10000) == 1500
    assert cantax.fedTax(80000) == 13730.58
    assert cantax.fedTax(200000) == 45477.59
    assert cantax.fedTax(300000) == 77902.87