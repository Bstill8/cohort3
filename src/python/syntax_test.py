import syntax

def func(x):
    return x + 1

def test_answer():
    assert func(3) == 4

def test_sum():
    assert syntax.sum(1,3) == 4
    assert syntax.sum(6,8) == 14