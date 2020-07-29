import glob
import os

posts_dir = '_posts'
categories_dir = '_category'

# Find new tags
filenames = glob.glob(os.path.join(posts_dir, '*.md'))
tags = set()

for filename in filenames:
    with open(filename, 'r') as file:
        for line in file:
            key = line.strip().split(':')[0]

            if key == 'categories':
                categories = line.strip().split(':')[1]
                categories = categories.split(',')
                categories[0] = categories[0].split('[')[1].strip()
                categories[-1] = categories[-1].split(']')[0].strip()
                tags.update(categories)
                break

# Delete old tags
old_tags = glob.glob(os.path.join(categories_dir, '*.md'))
for filename in old_tags:
    os.remove(filename)

# Create directory if not exists
if not os.path.exists(categories_dir):
    os.makedirs(categories_dir)

# Write new tags
for tag in tags:
    category_filename = os.path.join(categories_dir, f'{tag}.md')
    with open(category_filename, 'w') as file:
    
        file.write(f'''---
tag: {tag} 
permalink: "/category/{tag}"
---
        ''')
  
print('Written', len(tags), 'files')