import os
import shutil

print("Emptying a poorly formatted index.js file")
open(os.path.join("frontend", "pages", "index.js"), "w").close()
print("Deleting default _app.js file (added in create-next-app v9.5.5)")
os.remove(os.path.join("frontend", "pages", "_app.js"))
print("Deleting default next.config.js (added in create-next-app v11)")
os.remove(os.path.join("frontend", "next.config.js"))
print("Deleting the default api directory")
shutil.rmtree(os.path.join("frontend", "pages", "api"))