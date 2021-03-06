from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import sys
sys.path.insert(0, 'C:/code/cohort-3/src/python/Excell_exercise/')
import invoice_creator
app = Flask(__name__)
CORS(app)
customer = invoice_creator.customer_dict
invoices = invoice_creator.invoice_dict
item = invoice_creator.item_dict
products = invoice_creator.product_dict

stores = []
@app.route('/') # this is basic domain
def home():
    return render_template("index.html")

@app.route('/dump') #basic dump
def dump():
    return jsonify({"customer": customer, "invoices": invoices, "item": item, "products": products})

@app.route('/customers') #displays customer table
def customers():
    result = '<table style="border: 1px solid black; border-spacing: 0px; text-align: center;"><tr style="border: 1px solid black; border-spacing: 0px"><th>ID</th><th>First Name</th><th>Last Name</th></tr>'
    for item in customer:
        fname = ''
        lname = ''
        after_space = False
        for char in customer[item]:
            if char == ' ':
                after_space = True
                continue
            if after_space:
                lname = lname + char
            else:
                fname = fname + char

        result = result + '<tr style="border: 1px solid black; border-spacing: 0px">' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(item) + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + fname + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + lname + '</td>' + '</tr>'
    result = result + '</table>'
    return result

@app.route('/invoices')
def invoice():
    result = result = '<table style="border: 1px solid black; border-spacing: 0px; text-align: center;"><tr style="border: 1px solid black; border-spacing: 0px"><th>ID</th><th>Date</th><th>Customer ID</th></tr>'
    for item in invoices:
        result = result + '<tr style="border: 1px solid black; border-spacing: 0px">' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(item) + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + invoices[item][0] + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(invoices[item][1]) + '</td>' + '</tr>'
    result = result + '</table>'
    return result

@app.route('/items')
def items():
    result = result = '<table style="border: 1px solid black; border-spacing: 0px; text-align: center;"><tr style="border: 1px solid black; border-spacing: 0px"><th>ID</th><th>Invoice ID</th><th>Product ID</th><th># of Items</th></tr>'
    for thing in item:
        result = result + '<tr style="border: 1px solid black; border-spacing: 0px">' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(thing) + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(item[thing][0]) + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(item[thing][1]) + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(item[thing][2]) + '</td>' + '</tr>'
    result = result + '</table>'
    return result


@app.route('/products')
def product():
    result = result = '<table style="border: 1px solid black; border-spacing: 0px; text-align: center;"><tr style="border: 1px solid black; border-spacing: 0px"><th>ID</th><th>Product Name</th><th>Price</th></tr>'
    for item in products:
        result = result + '<tr style="border: 1px solid black; border-spacing: 0px">' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(item) + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + products[item][0] + '</td>' + '<td style="border: 1px solid black; border-spacing: 0px">' + str(products[item][1]) + '</td>' + '</tr>'
    result = result + '</table>'
    return result


app.run(port=5003)