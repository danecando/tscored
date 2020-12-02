import { ITreeNode, mapNode } from './binarytree'

describe('binary tree type stores values and possible link to next item', () => {
  test('mapNode creates a new node with new value mapped to it', () => {
    const leaf: ITreeNode = {
      value: 'leaf',
    }

    const pine = mapNode(leaf, () => 'pine')

    expect(pine.value).toBe('pine')
  })
})
