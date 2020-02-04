def class_sector_pop():
    res_cnt = {"classes": {}, "sectors": {}}
    with open("Census_by_Community_2018.csv") as file:
        next(file)
        for line in file:
            CLASS = ""
            SECTOR = ""
            population = ""
            comma = 0  # using comma's to differentiate each column
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
    return res_cnt

def format():
    to_be_formatted = class_sector_pop()

    