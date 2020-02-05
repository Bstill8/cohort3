def class_sector_pop():
    res_cnt = {"classes": {}, "sectors": {}, "total": 0}
    with open("C:/code/cohort-3/src/python/census_exercise/Census_by_Community_2018.csv") as file:
        total_lines = 0
        next(file)
        for line in file:
            CLASS = ""
            SECTOR = ""
            population = ""
            comma = 0  # using comma's to differentiate each column
            total_lines += 1
            for char in line:
                if char == ",":
                    comma += 1
                if comma == 0 and char != ",":
                    CLASS = CLASS + char
                if comma == 4 and char != ",":
                    SECTOR = SECTOR + char
                if comma == 9 and char != ",":
                    population = population + char

            if CLASS in res_cnt["classes"]:
                res_cnt["classes"][CLASS] += int(population)
            else:
                res_cnt["classes"][CLASS] = int(population)
            
            if SECTOR in res_cnt["sectors"]:
                res_cnt["sectors"][SECTOR] += int(population)
            else:
                res_cnt["sectors"][SECTOR] = int(population)
    res_cnt["total"] = total_lines
    return res_cnt

def reporter():
    to_be_formatted = class_sector_pop()
    with open("C:/code/cohort-3/src/python/census_exercise/report.txt", "w") as file:
        file.write("=============================================Class Polulations=============================================\n")
        for CLASS in to_be_formatted["classes"]:
            file.write(CLASS + ":  " + str(to_be_formatted["classes"][CLASS]) + "\n")
        file.write("=============================================Sector Polulations=============================================\n")
        for SECTOR in to_be_formatted["sectors"]:
            file.write(SECTOR + ":  " + str(to_be_formatted["sectors"][SECTOR]) + "\n")
        file.write("===================================================Totals===================================================\n")
        file.write("Total Lines:  " + str(to_be_formatted["total"]) + "\n")
        file.write("Total Population:  " + str(to_be_formatted["classes"]["Residential"] + to_be_formatted["classes"]["Industrial"]) + "\n")
        



reporter()