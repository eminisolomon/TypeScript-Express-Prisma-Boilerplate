#!/bin/bash

# Prints text in bold green color
green_bold() {
  echo -e "$(tput bold)$(tput setaf 2)$1$(tput sgr0)"
}

# Reading module name
echo "Module name:"
read -r module_name

# Creating folder structure
module_dir="src/modules/$module_name"
interface_dir="src/interface"
dto_dir="src/dto"

mkdir -p "$module_dir" "$interface_dir" "$dto_dir"

# Creating files
cd "$module_dir" || exit
touch "$module_name".controller.ts "$module_name".service.ts "$module_name".route.ts

cd "$interface_dir" || exit
touch "$module_name".interface.ts

cd "$dto_dir" || exit
touch "$module_name".dto.ts

# Output messages
echo -e "Created folder:
   $(green_bold "$module_dir")
"

echo -e "Created files:
  $(green_bold "$module_name.controller.ts")
  $(green_bold "$module_name.service.ts")
  $(green_bold "$module_name.route.ts")
  $(green_bold "$interface_dir/$module_name.interface.ts")
  $(green_bold "$dto_dir/$module_name.dto.ts")
"
