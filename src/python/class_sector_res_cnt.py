def class_sector_pop():
    res_cnt = {"classes": {}, "sectors": {}, "total": 0}
    with open("Census_by_Community_2018.csv") as file:
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

def format():
    to_be_formatted = class_sector_pop()
    print("=============================================Class Polulations=============================================")
    for CLASS in to_be_formatted["classes"]:
        print(CLASS + ":  " + str(to_be_formatted["classes"][CLASS]))
    print("=============================================Sector Polulations=============================================")
    for SECTOR in to_be_formatted["sectors"]:
        print(SECTOR + ":  " + str(to_be_formatted["sectors"][SECTOR]))
    print("===================================================Totals===================================================")
    print("Total Lines:  " + str(to_be_formatted["total"]))
    print("Total Population:  " + str(to_be_formatted["classes"]["Residential"] + to_be_formatted["classes"]["Industrial"]))

format()