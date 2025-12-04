# 🐙 How to Push Your Code to GitHub

Since I cannot access your GitHub credentials directly, you need to run these commands in your terminal.

## Step 1: Create a Repo on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  Name it `seretech` (or whatever you like).
3.  **Do NOT** check "Add a README", "Add .gitignore", or "Add a license" (keep it empty).
4.  Click **Create repository**.

## Step 2: Push Your Code
Copy the URL of your new repo (e.g., `https://github.com/YOUR_USERNAME/seretech.git`).

Then, run these commands in your VS Code terminal:

```bash
# 1. Stage all changes
git add .

# 2. Commit changes
git commit -m "Final version of website"

# 3. Link to GitHub (REPLACE THE URL BELOW!)
git remote add origin https://github.com/YOUR_USERNAME/seretech.git

# 4. Push to GitHub
git branch -M main
git push -u origin main
```

### ⚠️ If `git remote add origin` fails...
It means a remote is already linked. You can check it with `git remote -v`.
To remove the old one and add yours:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/seretech.git
```
