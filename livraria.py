class Book:
    def __init__(self, title, price, isbn):
        self.title = title
        self.price = price
        self.isbn = isbn


class ShoppingCart:
    def __init__(self):
        self.items = []

    def add(self, book):
        self.items.append(book)

    def remove(self, book):
        self.items.remove(book)

    def total(self):
        return sum(b.price for b in self.items)
