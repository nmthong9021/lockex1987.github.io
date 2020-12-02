class DrawTree(object):
    def __init__(self, tree, depth=0):
        self.x = -1
        self.y = depth
        self.tree = tree
        self.children = [DrawTree(t, depth+1) for t in tree]

def layout(tree):
    dt = DrawTree(tree)
    setup(dt)
    return dt

def setup(tree, i=0):
    if not tree: return i
    
    if len(tree.children) > 0: l = tree.children[0]
    else:                      l = None
    if len(tree.children) > 1: r = tree.children[1]
    else:                      r = None

    i = setup(l, i)
    tree.x = i
    i += 1
    return setup(r, i)
