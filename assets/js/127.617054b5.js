(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{706:function(t,s,a){"use strict";a.r(s);var n=a(66),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"_998-最大二叉树-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_998-最大二叉树-ii"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-binary-tree-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("998. 最大二叉树 II"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("最大树定义：一个树，其中每个节点的值都大于其子树中的任何其他值。")]),t._v(" "),a("p",[t._v("给出最大树的根节点 "),a("code",[t._v("root")]),t._v("。")]),t._v(" "),a("p",[t._v("就像"),a("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-binary-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("之前的问题"),a("OutboundLink")],1),t._v("那样，给定的树是从表 "),a("code",[t._v("A")]),t._v("（"),a("code",[t._v("root = Construct(A)")]),t._v("）递归地使用下述 "),a("code",[t._v("Construct(A)")]),t._v(" 例程构造的：")]),t._v(" "),a("ul",[a("li",[t._v("如果 "),a("code",[t._v("A")]),t._v(" 为空，返回 "),a("code",[t._v("null")])]),t._v(" "),a("li",[t._v("否则，令 "),a("code",[t._v("A[i]")]),t._v(" 作为 A 的最大元素。创建一个值为 "),a("code",[t._v("A[i]")]),t._v(" 的根节点 "),a("code",[t._v("root")])]),t._v(" "),a("li",[a("code",[t._v("root")]),t._v(" 的左子树将被构建为 "),a("code",[t._v("Construct([A[0], A[1], ..., A[i-1]])")])]),t._v(" "),a("li",[a("code",[t._v("root")]),t._v(" 的右子树将被构建为 "),a("code",[t._v("Construct([A[i+1], A[i+2], ..., A[A.length - 1]])")])]),t._v(" "),a("li",[t._v("返回 "),a("code",[t._v("root")])])]),t._v(" "),a("p",[t._v("请注意，我们没有直接给定 A，只有一个根节点 "),a("code",[t._v("root = Construct(A)")]),t._v(".")]),t._v(" "),a("p",[t._v("假设 "),a("code",[t._v("B")]),t._v(" 是 "),a("code",[t._v("A")]),t._v(" 的副本，并附加值 "),a("code",[t._v("val")]),t._v("。保证 "),a("code",[t._v("B")]),t._v(" 中的值是不同的。")]),t._v(" "),a("p",[t._v("返回 "),a("code",[t._v("Construct(B)")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("p",[a("strong",[a("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/maximum-binary-tree-1-1.png",alt:"img"}}),a("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/maximum-binary-tree-1-2.png",alt:"img"}})])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [4,1,3,null,null,2], val = 5\n输出：[5,4,null,1,3,null,null,2]\n解释：A = [1,4,2,3], B = [1,4,2,3,5]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("示例 2：\n"),a("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/maximum-binary-tree-2-1.png",alt:"img"}}),a("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/maximum-binary-tree-2-2.png",alt:"img"}})])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [5,2,4,null,1], val = 3\n输出：[5,2,4,null,1,null,3]\n解释：A = [2,1,5,4], B = [2,1,5,4,3]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("示例 3：\n"),a("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/maximum-binary-tree-3-1.png",alt:"img"}}),a("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/maximum-binary-tree-3-2.png",alt:"img"}})])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [5,2,3,null,1], val = 4\n输出：[5,2,4,null,1,3]\n解释：A = [2,1,5,3], B = [2,1,5,3,4]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("1 <= B.length <= 100")])])]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  TreeNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertIntoMaxTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TreeNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertIntoMaxTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      TreeNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" new_node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      new_node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new_node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("p",[t._v("这里的递归，有点味道。 尤其是针对示例2，仔细品。 那个new_node->left = root; ，由于root是NULL， 返回就返回这个新添加的结点。   妙！")])])}),[],!1,null,null,null);s.default=e.exports}}]);