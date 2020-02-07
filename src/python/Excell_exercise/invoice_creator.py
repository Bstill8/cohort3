import openpyxl

workbook = openpyxl.open("C:/code/cohort-3/src/python/Excell_exercise/Invoices.xlsx")
customer = workbook["Customer"]
invoices = workbook["Invoices"]
items = workbook["Invoice Line Items"]
products = workbook["Product Table"]

def store(sheet, flag):
    return_dict = {}
    for row in sheet:
        if row[0].value == "ID":
            continue
        if flag == "customer":
            return_dict[row[0].value] = row[1].value + " " + row[2].value
        if flag == "invoice":
            return_dict[row[0].value] = [row[1].value.strftime("%m/%d/%Y"), row[2].value]
        if flag == "lines":
            return_dict[row[0].value] = [row[1].value, row[2].value, row[3].value]
        if flag == "product":
            return_dict[row[0].value] = [row[1].value, row[2].value]
    return return_dict

customer_dict = store(customer, "customer")
invoice_dict = store(invoices, "invoice")
item_dict = store(items, "lines")
product_dict = store(products, "product")

def invoice_generator(invoice_ID):
    date = invoice_dict[invoice_ID][0]
    customer_ID = invoice_dict[invoice_ID][1]
    customer_name = customer_dict[customer_ID]
    total = 0
    with open("C:/code/cohort-3/src/python/Excell_exercise/invoice.txt", "w+") as file:
        file.write(customer_name + "\t\t\t\t")
        file.write(date + "\n")
        file.write("Customer ID:" + str(customer_ID) + "\t\t\t")
        file.write("Invoice ID:" + str(invoice_ID) + "\n\n\n\n\n\n\n")
        file.write("Product\tProduct ID\tUnit Price\tQuantity\tTotal\n")
        for entry in item_dict:
            if item_dict[entry][0] == invoice_ID:
                total += item_dict[entry][2]*product_dict[item_dict[entry][1]][1]
                file.write(str(product_dict[item_dict[entry][1]][0])+"\t"+str(item_dict[entry][1])+"\t\t\t"+str(product_dict[item_dict[entry][1]][1])+"\t\t\t"+str(item_dict[entry][2])+"\t\t\t"+str("{:.2f}".format(item_dict[entry][2]*product_dict[item_dict[entry][1]][1]))+ "\n")
        file.write("\t\t\t\t\t\t\t\t\t Total: " + str("{:.2f}".format(total)))
invoice_generator(1)

