from livraria import Book, ShoppingCart


def test_add_e_total():
    cart = ShoppingCart()
    cart.add(Book("Livro 1", 10.0, "1"))
    cart.add(Book("Livro 2", 20.0, "2"))
    assert cart.total() == 30.0


def test_remove():
    cart = ShoppingCart()
    b1 = Book("Livro 1", 10.0, "1")
    b2 = Book("Livro 2", 20.0, "2")
    cart.add(b1)
    cart.add(b2)
    cart.remove(b2)
    assert cart.total() == 10.0
