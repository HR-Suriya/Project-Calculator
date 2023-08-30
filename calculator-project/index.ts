#! /usr/bin/env node

// Importing All The Necessary Files To Execute Code
import { welcome } from "./required/welcomeScreen.js";
import { startQuestions } from "./required/questionPrompt.js";

// Calling "welcome" Function From Other Page
await welcome();

// Calling "startQuestions" Function From Other Page
startQuestions();