![Expr Node Img](/img/vvvv/ExprNode.png)

# Expr Node
The `Expr` node allows to parse a mathematical expression and returns the result. It is part of the `Vl.Addons` package.
We first have to define the `variables` that we want to use for the expression. We then define what the data type of the output of the node is suppose to be. Then the node can run and we can define the inputs for the variables. We then can add the expression.

The `Expr` node also has a *Error Message* output which we can check to see if there might is a datatype conversion problem.

If you can't find the desired data type in the IO box, select `Generic` and then configure type with right click *Configur*.