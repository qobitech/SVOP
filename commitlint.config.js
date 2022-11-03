module.exports = { 
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", [
            "fix",
            "feat",
            "build",
            "chore",
            "ci",
            "docs",
            "style",
            "refactor",
            "perf",
            "test",
            "revert",
            "hot-fix"
        ]]
    }
}