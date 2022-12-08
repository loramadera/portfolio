import lodash
import mongo_db

def SeedProducts():
    products = [
        { 'name': 'Surfboard', 'price': '250',
            'imageUrl': 'https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        { 'name': 'Towel', 'price': '13.45',
            'imageUrl': 'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        { 'name': 'Blanket', 'price': '22.39',
            'imageUrl': 'https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        },
        { 'name': 'Soccer Ball', 'price': '8.99',
            'imageUrl': 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        },
        { 'name': 'Rose', 'price': '4.50',
            'imageUrl': 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
        },
    ]

    mongo_db.insert_many('product', products)

    return None

def SearchProducts(searchText, searchFields = None, autoSeed = 1):
    # searchFields = searchFields if searchFields is not None else ['name']
    ret = { 'valid': 1, 'msg': '', 'products': [] }

    if autoSeed:
        products = mongo_db.find('product', {}, limit = 6)['items']
        if len(products) < 5:
            SeedProducts()

    query = {
        'name': { '$regex': searchText, '$options': 'i' },
    }
    ret['products'] = mongo_db.find('product', query)['items']

    return ret

def GetProductsByIds(productIds):
    ret = { 'valid': 1, 'msg': '', 'products': [] }
    objectIds = []
    for productId in productIds:
        objectIds.append(mongo_db.to_object_id(productId))
    query = {
        '_id': { '$in': objectIds },
    }
    ret['products'] = mongo_db.find('product', query)['items']
    return ret

def SaveProduct(product):
    ret = { 'valid': 1, 'msg': '', 'product': product }
    if '_id' in product:
        query = {
            '_id': mongo_db.to_object_id(product['_id'])
        }
        mutation = {
            '$set': lodash.omit(product, ['_id']),
        }
        result = mongo_db.update_one('product', query, mutation)
    else:
        ret['product'] = mongo_db.insert_one('product', product)['item']
        ret['product']['_id'] = mongo_db.from_object_id(ret['product']['_id'])
    return ret

def DeleteProduct(productId):
    ret = { 'valid': 1, 'msg': '' }
    query = {
        '_id': mongo_db.to_object_id(productId)
    }
    result = mongo_db.delete_one('product', query)
    return ret
