# Odin-Binary-Search-Trees

This is a blank page with a simple script that turns an input array `[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]` into a visual binary tree.

Use the chrome inspect window's console tab to view the binary search tree being created.

Script is made using Vanilla Javascript.

The class (Created in index.js) has the following classes/functions.

# Class node()

A class created for each individual node in the Binary Search Tree. For exclusive use by the Tree() class. Contatins the `value`, `right` and `left` attributes.

# Class Tree()

Use `const x = new Tree();` to create a new Binary Search Tree. The name of the Binary Search Tree is 'x'.

The Tree() class has the following available functions:

## insert()

use x.insert(value) to insert a new value into the tree.

## delete()

use x.delete(value) to delete a value from the tree.

# Global Functions

## buildTree(array)

Builds a new Binary Search Tree with the given sorted array. Returns the root of the tree.

## prettyPrint(root)

Displays a visual representation of the binary search tree. Requires the root of the binary search tree as input.
