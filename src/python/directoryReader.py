import os

def directory_reader(path = "C:/code/cohort-3/src/javascript"):
    result = {"number": 0, "size": 0}
    for entry in os.listdir(path):
        if os.path.isfile(path + "/" + entry):
            result["number"] += 1
            result["size"] += os.stat(path + "/" + entry).st_size

    print("There are " + str(result["number"]) + " files\nThese files take up " + str(result["size"]) + " bytes")
    return result
