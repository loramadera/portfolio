import lodash
import mongo_db

def SeedProducts():
    products = [
        { 'name': 'Greenium', 'price': '8.00',
            'imageUrl': 'https://images.unsplash.com/photo-1416339411116-62e1226aacd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
        },
        { 'name': 'Mossy Fairy', 'price': '13.45',
            'imageUrl': 'https://images.unsplash.com/photo-1646220461631-86848066dfe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80',
        },
        { 'name': 'Kelpie', 'price': '22.39',
            'imageUrl': 'https://images.unsplash.com/photo-1646739035307-e1924c8b9d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
        },
        { 'name': 'Fairy Glow', 'price': '8.99',
            'imageUrl': 'https://images.unsplash.com/photo-1559657153-fdea6cd5ddf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
