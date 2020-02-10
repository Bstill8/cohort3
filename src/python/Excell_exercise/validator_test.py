import validator as V

def test_validator():
    assert V.validator("C:/code/cohort-3/src/python/Excell_exercise/Invoices.xlsx") == True
    assert V.validator("C:/code/cohort-3/src/python/Excell_exercise/Invoices_test.xlsx") == True
    assert V.validator("C:/code/cohort-3/src/python/Excell_exercise/invalid1.xlsx") == False
    assert V.validator("C:/code/cohort-3/src/python/Excell_exercise/invalid2.xlsx") == False
    assert V.validator("C:/code/cohort-3/src/python/Excell_exercise/invalid3.xlsx") == False
    assert V.validator("C:/code/cohort-3/src/python/Excell_exercise/invalid3.xlsx") == False