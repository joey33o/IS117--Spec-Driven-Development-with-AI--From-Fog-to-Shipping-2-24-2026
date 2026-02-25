---
title: "Linux Cron Automation"
tagline: "BASH script that monitors system health and runs on autopilot via cron"
receipt: "Eliminated 60 minutes of daily manual log review by automating checks on a 5-minute cron cycle"
category: "Specialist"
coverImage: "https://placehold.co/800x450/1a1a1a/f9f9f9?text=BASH+%2F+Cron"
gitLink: "https://github.com/joey33o/IT-340-Lab_4-remote"
---

## Overview

Built a BASH shell script (`monitor.sh`) that collects system health metrics — CPU load, memory usage, and disk space — and writes the results to a structured log file.

## How It Works

The script is registered as a cron job to execute on a repeating schedule without any manual intervention. Output is appended to `system_log.txt` for later review, and a separate `debug_cron_custom.log` captures cron execution status to simplify troubleshooting.

## Key Decisions

Keeping the script in pure BASH (no Python, no external tools) ensures it runs on any POSIX-compliant system with zero dependency installation. Cron's reliability means the monitoring never goes offline, even across reboots.
