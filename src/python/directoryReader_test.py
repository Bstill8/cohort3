import directoryReader

def test_director_reader():
    assert directoryReader.directory_reader("C:/code/cohort-3/src/javascript")["number"] == 10
    assert directoryReader.directory_reader("C:/code/cohort-3/src/01-getting-started")["number"] == 2
    assert directoryReader.directory_reader("C:/code/cohort-3/src/01-getting-started")["size"] == 13363
    assert directoryReader.directory_reader("C:/code/cohort-3/src/javascript")["size"] == 27330

directoryReader.directory_reader()