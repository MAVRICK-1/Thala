#! /usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
let later_Thala=`
⠀⠀⠀⠀⠀⣀⡴⠖⠒⠒⢒⣒⡖⠒⠒⠒⠒⠒⠒⠶⠶⠤⣤⣀⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣴⠋⠀⠀⠤⣪⣝⡲⠯⠭⠥⠀⠀⠀⠀⠀⣀⣐⣒⡒⠉⠙⢦⡀⠀⠀
⠀⠀⠀⣼⠃⠀⠈⠰⠫⠋⣀⣀⣀⣀⠀⠃⠀⠀⠀⠸⠀⠀⠀⠈⠆⠀⠀⢧⠀⠀
⠀⣠⡾⠁⠀⡀⠠⠄⢰⣿⠿⠿⢯⣍⣙⣶⠀⠀⢀⣠⣶⣾⣿⠶⠆⠤⠤⢜⢷⡄
⡾⢻⢡⡞⠋⣽⠛⠲⠤⡤⠴⠋⠀⠀⠉⠁⠀⠀⠈⣿⠁⠀⢀⣀⣠⠶⠶⣽⣵⣿
⣇⢠⢸⡥⠶⣟⠛⠶⣤⣀⠀⠀⠀⢲⡖⣂⣀⠀⠀⠈⢳⣦⡀⠉⠉⣽⡄⠰⣻⣿
⠙⣮⡪⠁⠀⠻⣶⣄⣸⣍⠙⠓⠶⣤⣥⣉⣉⠀⠠⠴⠋⠁⣈⣥⣴⣿⡇⠈⣽⠃
⠀⠈⢻⡄⠀⠀⠙⣆⢹⡟⠷⣶⣤⣇⣀⠉⠙⡏⠉⢻⡟⢉⣹⣅⣼⣿⡇⠀⡏⠀
⠀⠀⠀⠻⣄⠀⠀⠈⠻⢦⡀⠀⣽⠉⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⡇⠀
⠀⠀⠀⠀⠙⢦⣀⠄⡀⢄⡙⠻⠧⣤⣀⣀⣿⠀⠀⣿⢀⣼⣃⣾⣼⠟⠁⠀⡇⠀
⠀⠀⠀⠀⠀⠀⠉⠓⢮⣅⡚⠵⣒⡤⢄⣉⠉⠉⠉⠉⠉⠉⠉⢀⡠⠀⠀⠀⣷⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠳⢦⣄⡉⠙⠛⠃⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⡿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⠶⢤⣤⣀⣀⣀⣀⣀⣀⡤⠞⠁⠀
`
let Thala=`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠉⢀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⢤⢤⣤⣄⣀⣀⣀⣀⣀⣀⣀⡉⠉⠉⠉⠉⠛⠛⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⣠⣿⣿⣿⣿⣿⠟⢋⣤⡶⠟⣋⣩⣤⠶⠶⠿⠿⠿⠿⠿⣿⣶⣶⣤⣭⣭⣭⣭⣭⣭⣭⣤⣤⣴⣶⣶⣦⣝⣿⣶⣄⡀⠙⠿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣤⣾⣿⣿⣿⣿⣿⠿⠟⣋⣭⣤⣶⣶⠾⠿⠿⠿⠷⠶⢶⣾⣿⣿⣭⣭⣭⣭⣭⣭⣥⣤⣤⣤⣤⣄⣀⠉⠙⠻⣿⣿⣿⣽⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣴⣿⣿⣿⠟⣋⣴⡾⢋⣵⠞⣋⣭⣶⣶⣿⣿⣿⣿⣿⣦⡙⣿⣿⣿⣿⣿⣿⣿⣟⣉⣭⣭⣭⣶⣶⣬⣍⠛⢿⣿⣿⣿⣿⣦⡀⠙⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠏⠀⣼⣿⣿⣿⣷⣾⡿⢃⡴⢋⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⣿⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣇⠀⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠋⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⠟⠋⠉⠀⠀⠀⠀⢀⣀⠀⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣿⠿⠿⠿⠿⠿⢿⣿⣾⣿⣿⣿⣿⣿⡀⠘⢿⣿⣿⣿
⣿⣿⣿⡿⠋⠀⠀⠈⠭⢽⣿⣿⣿⣿⠛⠛⢩⡟⠁⠠⠒⠀⠀⠀⠀⠀⠘⠛⠿⣶⣄⠀⠙⢿⣿⣿⣿⣿⣿⠿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠈⣿⣛⠛⠛⠛⠛⢷⣄⠀⠙⢿⣿
⣿⣿⠋⠀⡔⣠⣾⡿⠟⠋⠉⠉⠉⠙⠻⢿⣡⣿⣶⣶⣶⣾⡿⠏⠉⣷⣶⣦⣄⡀⠉⠀⣠⣾⣿⣿⣿⣧⣀⠀⠀⢀⣠⣤⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⡙⠦⣍⠳⣄⠀⢿
⣿⠁⢠⡞⣰⣿⠟⠀⣠⣶⣾⡏⢱⣦⣤⣀⡈⠉⠛⠛⠋⠉⢀⣤⣾⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⠿⠿⣿⡿⠛⠉⢉⣉⠉⠙⢷⢸⣷⡘⠀⢸
⣧⠀⣾⡇⣿⡿⠀⣼⣿⣿⡿⠁⠀⠙⠻⢿⣿⣷⣶⣶⣶⣿⣿⣿⣿⣿⣿⡿⢿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣧⡀⠈⠻⢿⣿⣿⣦⣀⣀⣀⣀⣾⠋⣿⣷⣶⣾⡆⣿⡇⠀⢸
⣿⠀⢿⡇⢿⣧⠀⢿⡉⠁⠀⠀⢶⣶⣤⡀⠈⠙⠻⢿⣿⣿⣟⣛⣋⣭⣭⣥⡎⠀⣠⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⠀⠀⠙⢿⣿⣿⣿⣿⣿⡟⠀⠘⣿⣿⠋⣰⡿⠐⠀⣸
⣿⡀⠘⣿⡘⣿⡄⠘⣿⣿⣿⠀⠈⠻⣿⣿⣷⣦⠀⢀⡀⠉⠙⠛⠿⢿⣿⣿⣇⠀⢻⡇⢀⣀⣀⣨⣿⣿⣿⣿⡿⠋⠀⣠⣤⣶⣬⣙⠻⣿⡿⠁⠀⠀⢸⡿⢚⣩⡴⠁⢠⣿
⣿⣷⡄⠈⠳⣤⣉⠻⣿⣿⣿⣧⡀⠀⠀⠉⠛⢿⠀⠘⢿⣿⣶⣦⣤⣀⡀⠈⠉⠓⠸⠿⢿⣿⣿⣿⣿⣧⣀⠁⢀⣠⣾⣿⣿⣿⡿⠿⠛⠁⠀⡀⠈⠀⠘⣿⣿⡿⠁⢠⣿⣿
⣿⣿⣿⣦⡀⠀⢭⣿⣿⣿⣿⣿⣷⡄⠈⢶⣤⣀⠀⠀⠀⠙⠛⠿⣿⣿⣿⠀⢰⣶⣤⣤⣄⣀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⢉⡁⠀⠀⣴⣶⠀⢿⡄⠀⠀⣿⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣆⠀⠹⣿⣿⣿⣿⣿⣿⣦⠀⠹⣿⠀⢠⣤⣀⡀⠀⠀⠈⠁⠀⠻⠿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⡄⠰⣿⣿⣿⣿⡆⠀⣿⠟⠀⠈⠁⠀⠀⣿⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣧⠀⠹⣿⣿⣿⣿⣿⣿⣷⣄⠈⠀⣼⣿⣿⣿⣷⣶⡄⠀⢀⠀⠀⠀⠀⠈⠉⠁⠀⠈⠉⠉⠉⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣧⠀⠙⢿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠙⠿⣿⣿⣿⠇⠀⣼⣿⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠈⠙⠟⠀⣰⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣷⡆⠀⣠⣶⣶⠄⢀⣴⡖⠀⣰⠇⠀⠃⢀⣿⣿⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠈⠙⢦⣌⡛⠷⣮⣝⡻⠿⣷⣦⣤⣀⠈⠉⠛⠛⠿⠿⠿⠇⠈⣿⣿⣿⣿⠇⢀⣿⣿⠏⠀⠼⠿⠀⠐⠛⠉⢀⣴⣿⣿⣿⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠈⠛⠷⣤⣉⡛⠷⣤⣝⡛⠿⣿⣿⣶⣦⣤⣤⣤⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣠⣤⣤⣴⣶⣿⣿⢿⣿⣿⣿⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡈⠙⠛⠷⣦⣭⣙⡳⠶⣬⣍⣛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢋⣴⣿⣿⡟⢸⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡀⠉⠛⠿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣬⣭⣭⣭⣭⣭⣭⣭⣭⣭⣴⣾⣿⣿⣿⣿⠃⠀⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⡀⠉⠛⠿⣷⣶⣮⣭⣍⣒⣒⠲⠶⠭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣴⣾⣿⣿⠟⢋⣴⣿⣿⣿⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣤⣄⣀⡀⠈⠙⠛⠛⠿⠿⠿⠿⠿⠿⠿⠿⠿⠛⠉⢀⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀⠈⠉⠛⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⢀⣾⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⡶⣶⣶⢾⢿⣿⣿⣿⣿⣿⣿⣿`


let not_Thala=`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠉⠉⢁⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣉⡉⠉⠉⠉⠉⠉⠙⠛⠛⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⣤⣾⣿⣿⣿⣿⡿⠟⠋⢉⣁⣤⣤⣤⣤⣤⣤⣤⣤⣭⣉⣉⣉⡛⠛⠛⠓⠒⠒⠂⢀⣠⣄⣀⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⣰⣿⣿⣿⣿⡿⠋⢁⡠⠖⠚⢉⣉⣡⣤⣤⣤⣤⣤⣀⣉⣉⡉⠉⠉⠉⠉⠛⠛⠛⠉⣉⣉⣉⣉⣉⣹⣶⣤⡀⠙⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣼⣿⣿⣿⠟⠋⣠⠖⠋⣠⠶⢛⣋⣩⣭⣤⣤⣤⣤⡌⢿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢛⣛⣛⣛⡛⠻⢿⣿⣿⣿⣿⣷⣄⠈⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠏⠀⣼⣿⣿⣿⣇⣴⠟⢁⣴⠟⠁⢚⣉⣭⣤⡄⣤⣬⣭⣉⡛⠊⢿⣿⣿⣿⣿⣿⣿⣷⠟⣿⣿⣿⣿⣿⣿⣶⡌⢻⣿⣿⣿⣿⡆⠈⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠏⠀⣼⣿⣿⣿⣿⣿⣿⣶⡿⢁⣴⣶⣬⣻⣿⣿⣷⣿⣿⣿⡿⢃⣶⣦⡙⢿⣿⣿⣿⣿⡏⣼⠿⢛⣉⡍⣤⣤⣤⣤⣤⣌⣉⠛⢿⣿⠀⢸⣿⣿⣿⣿
⣿⣿⣿⣿⠟⠁⠀⣼⣿⣿⣿⣿⣿⣿⣿⠟⢠⣷⣙⣛⣿⣿⠋⠀⠀⠀⠈⠹⣿⣷⠿⢋⣥⠀⢻⣿⣿⣿⡿⠨⣶⣿⣿⣿⣼⡿⠿⠾⢿⣿⣯⣷⣦⡙⣆⠀⠹⣿⣿⣿
⣿⣿⡿⠋⢀⡀⠈⣉⣩⣭⣭⣽⣿⣿⣄⡄⠸⣿⣾⣿⣿⣧⡀⠀⠀⠀⠀⢠⣿⣿⠴⠿⠿⠃⣸⣿⠟⠛⠁⣿⣮⣻⣿⣿⠋⠀⠀⠀⠀⢹⣿⣿⣿⡇⠘⢷⣄⠈⢻⣿
⣿⡟⠀⡠⢋⣴⣿⠟⠉⢀⣀⣀⡀⠙⠛⠷⣄⠙⠿⢫⣭⣻⣿⣶⣶⣶⣾⣿⠿⣿⣶⡿⠃⣠⣿⣿⣷⣦⡀⠻⣿⣿⣿⣿⣷⣄⣀⣀⣠⣾⣿⣟⣼⢃⡘⢶⡙⣆⠀⢿
⣿⠀⢰⡇⣸⣿⠃⢠⣾⣿⣿⠙⢿⣷⣦⣄⣼⣷⣦⣌⡙⠛⠃⠶⠬⠷⠶⠶⠛⢂⣀⣤⣾⣿⣿⣿⣿⣿⡇⢠⣍⡩⠾⣿⣝⢛⣿⣯⣭⠻⠿⢋⣁⡈⣿⡈⣿⡘⠀⢸
⡇⠀⣿⡇⢻⡏⠀⣿⣿⣿⠏⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣾⠿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣧⡀⠙⠻⣷⣶⣶⣶⣶⣶⣶⣶⠋⢻⣿⣿⣿⠇⣿⢣⠀⢸
⣇⠀⢻⡇⢸⡇⠀⣿⣁⣀⡀⠸⣿⣶⣤⡀⠉⠛⠿⣿⣿⣿⣭⣭⣭⣭⣥⡎⢠⣶⣶⠿⠿⠿⣿⣿⣿⣿⣿⣿⡦⠀⠈⠿⣿⣿⣿⣿⣿⣿⠀⠘⢿⣿⢋⣴⡟⡜⠀⣼
⣿⡀⠘⣇⠸⣿⡀⢹⣿⣿⣷⠀⠙⢿⣿⣿⣷⡄⢀⣀⠈⠙⠛⠿⢿⣿⣿⣷⠀⢻⣇⣰⣶⣄⣨⣿⣿⣿⣿⠟⠁⣰⣦⣿⣶⣍⣛⣿⣿⠃⠀⠀⠸⡿⢛⣩⡾⠁⣰⣿
⣿⣷⡀⠘⢷⣌⡛⢿⣿⣿⣿⡆⠀⠀⠉⠻⢿⡇⠘⢿⣿⣷⣶⣤⣄⡀⠉⠙⠳⠾⢿⣿⣿⣿⣿⣿⣏⡉⠁⣀⣴⣿⣿⣿⣿⣿⠿⠋⠀⣤⡄⠀⠀⣿⣿⡿⠁⣰⣿⣿
⣿⣿⣿⣦⠀⠹⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⣿⠀⣰⣶⣤⣤⣄⣀⠉⠉⠉⠉⠛⠛⠛⠛⠋⠉⠉⣀⠀⣴⣾⡄⢹⣧⠀⠀⢻⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣷⡄⠘⢿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠋⠀⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣶⡀⣶⣿⣿⣿⣿⠀⢿⣿⠇⠘⠋⠀⠀⢸⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡄⠈⢿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠛⠃⠀⠛⠛⠛⠛⠁⠙⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡄⠈⢿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣄⠈⠻⣿⣿⡄⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠈⠻⣿⡄⠘⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠙⢿⣆⠈⠻⡿⠀⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠻⣷⣄⠀⠰⣿⣿⣿⣿⣷⣦⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡇⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠘⢿⣷⣄⠙⠻⣿⣿⣿⡿⠀⣾⣿⣿⣶⣦⣄⡀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⢸⣿⡇⠀⢸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠻⣿⣷⣤⡈⠛⠿⠃⢰⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣷⣶⡆⠀⣶⣶⣦⠀⢠⣶⠂⢠⣿⠀⠾⠀⣾⣿⡇⠀⣼⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠈⠻⣿⣿⣶⣤⣀⠈⠙⠻⠿⢿⣿⣿⡇⠀⣿⣿⣿⣿⠁⢰⣿⣿⡟⠀⣿⠟⠀⠚⠋⠁⢀⣾⣿⣿⠁⢠⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠙⠻⢿⣿⣿⣶⣤⣤⣀⣀⡀⠀⠀⠉⠉⠉⠉⠀⢈⣉⣉⣁⣀⣀⣠⣤⣤⣴⣾⣿⣿⡿⠃⢠⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣄⡀⠉⠙⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠋⢁⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣤⣀⣀⣀⣀⡀⠈⠉⠉⠉⠉⠉⠉⠁⠀⠀⢀⣀⣀⣀⣠⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿
`
let playerName;

const sleep = (ms = 2000) => new Promise((r)=> setTimeout(r,ms))

function digitSum(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
function sumFormat(num) {
    let digits = String(num).split('');
    let sum = digits.reduce((acc, val) => acc + Number(val), 0);
    return digits.join(' + ') + ' = ' + sum;
}
function displayLettersAndCount(str) {
    let letters = str.split('').join(' , ');
    return `${letters} has ${str.length} letters`;
}
async function welcome(){
    const rainbowtitle = chalkAnimation.rainbow(
        'Who wants To be Thala ?\n'
    );
    await sleep();
    rainbowtitle.stop()
    console.log(`
        ${chalk.bgBlue('How to play : ')}
        Enter a word to prove your Thala fan or not..
        If the inputed value doesn't have any relation with 7 ${chalk.bgRed('You are not Thala')}
    `)
}



async function askName(){
    const answer = await inquirer.prompt({
        name: 'player_name',
        type:'input',
        message: 'Enter Your First Name ?',
        default(){
            return 'Player'
        },
    });
    playerName= answer.player_name;
}

async function word(){
    const answer = await inquirer.prompt({
        name: 'question_1',
        message:'Enter the Word : ',
        type:'input'
    })
    return handleAnswer(answer.question_1)
}

async function handleAnswer(    ans){
    let flag=0;
    let va=ans.toLocaleLowerCase();
    if (/^\d+$/.test(ans)) {
        let num =parseInt(ans)
        if (num%7==0) {
            const rainbowtitle = chalkAnimation.rainbow(
                ` ${num} divided by ${num/7} is 7 and 7 stands for Thala #Thala for a reason\n`
            );
            await sleep();
            rainbowtitle.stop()
            flag=1;
        }
        else if(digitSum(num)==7){
            const rainbowtitle = chalkAnimation.rainbow(
                ` ${sumFormat(num)}\n and 7 stands for Thala #Thala for a reason`
            );
            await sleep();
            rainbowtitle.stop();
            flag=1
        }
        else if(ans.length==7){
            const rainbowtitle = chalkAnimation.rainbow(
                ` ${displayLettersAndCount(ans)} \n and  7 stands for Thala #Thala for a reason`
            );
            await sleep();
            rainbowtitle.stop()
            flag=1
        }
        else{
            const rainbowtitle = chalkAnimation.rainbow(
                `
                ${sumFormat(num)} which doesn't have any relation with 7\n
                ${displayLettersAndCount(ans)} is not equal to 7\n
                `
            );
            await sleep();
            rainbowtitle.stop()
        }
    }
    else{
        if(va=='dhoni'||va=='thala'||va=='msdhoni'||va=='ms dhoni'||va=='mahi'){
            const rainbowtitle = chalkAnimation.rainbow(
                ` ${ans} means Thala #Thala for a reason\n`
            );
            await sleep();
            rainbowtitle.stop()
            flag=1;
        }
        else if(ans.length==7){
            const rainbowtitle = chalkAnimation.rainbow(
                ` ${displayLettersAndCount(ans)} and 7 stands for Thala #Thala for a reason\n`
            );
            await sleep();
            rainbowtitle.stop()
            flag=1;
        }
        else{
            const rainbowtitle = chalkAnimation.rainbow(
                ` ${displayLettersAndCount(ans)} \n`
            );
            await sleep();
            rainbowtitle.stop()
        }
    }
    await display_msg(flag);
    await sleep();
}
async function display_msg(val){
    let msg;
    let pic;
    if(val==1){
        msg =`Congrats ${playerName} \nYou Are Thala `;
        pic=`${Thala}`;
    }
    else{
        msg =`Sorry ${playerName} \nYou Are Not Thala`;
        pic=`${not_Thala}`;
    }
    figlet(msg, (err,data)=>{
        console.log(gradient.pastel.multiline(data))
        console.log(gradient.pastel(pic))
    });
    console.log("\n\n")
    

}
async function endcredits(){
    console.log(`${chalk.bgBlue('Created By Rishi Mondal Aka Mavrick')}`)
}
await welcome()
await askName()
await word()
await endcredits()

