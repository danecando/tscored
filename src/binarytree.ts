export interface ITreeNode {
  value: string
}

export interface ILeafNode extends ITreeNode {
  isLeaf: true
}

export interface IInnerNode extends ITreeNode {
  children: [ITreeNode] | [ITreeNode, ITreeNode]
}

export function mapNode<T extends ITreeNode>(node: T, f: (x) => any): T {
  return {
    ...node,
    value: f(node.value),
  }
}
