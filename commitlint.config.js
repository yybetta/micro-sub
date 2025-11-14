/**
 * https://blog.csdn.net/qq_38290251/article/details/111646491
 * 提交格式（注意冒号后面有空格）git commit -m <type>[optional scope]: <description>
 * e.g.1 : git commit -m 'fix(account): 修复xxx的bug'
 * e.g.2 : git commit -m 'refactor: 重构xx项目'
 * feat：新功能
 * update：更新某功能
 * fix：修补某功能的bug
 * refactor：重构某个功能
 * optimize: 优化构建工具或运行时性能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 'type-enum': [2, 'always', ['feat', 'update', 'fix', 'refactor', 'optimize', 'style', 'docs', 'chore']],
        'type-enum': [2, 'always', ['feat', 'fix', 'hotfix(feat)', 'hotfix(bug)']],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72]
    }
}
