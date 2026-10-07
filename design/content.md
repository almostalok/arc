# ARC Content & Voice Specification

**Document:** `content.md`  
**Reference:** Sections 138–143 of Master `design.md`  
**Design Standard:** Vercel × Apple × Linear × Stripe  

---

## 1. Product Voice & Tone (Sec. 141)

ARC speaks with quiet institutional authority. It manages the futures and records of real people.

| Attribute | What ARC Sounds Like | What ARC Never Sounds Like |
| :--- | :--- | :--- |
| **Confident** | *"824 students enrolled. Placement conversion at 91.4%."* | *"We're super thrilled to announce that placements are rocking!"* |
| **Concise** | *"18 students need attention."* | *"There are currently a total of 18 students who have been identified as requiring additional attention."* |
| **Professional** | *"Attendance is below the 75% regulatory cutoff."* | *"Uh-oh! Looks like you skipped too many classes, buddy!"* |
| **Human & Calm** | *"We couldn't load your applications. [Try again]"* | *"CRITICAL ERROR 0x8849F: SQL connection pool exhausted in thread 4."* |

---

## 2. Action Button Copy (Sec. 138)

Buttons must use strong, concise, context-specific action verbs:

| Context | Recommended Action Copy | Anti-Patterns to Avoid |
| :--- | :--- | :--- |
| **Student Roster** | `View students` | `Click here to see roster` |
| **Application Review** | `Review application` | `Proceed to next page` |
| **Attendance Marker** | `Mark attendance` / `Commit attendance` | `Submit form data` |
| **Job Drive** | `Create drive` | `Start new drive wizard` |
| **Data Export** | `Export CSV` / `Download report` | `Click here to download` |
| **AI Prompt** | `Ask ARC` / `Synthesize` | `Generate automated intelligence` |

---

## 3. Empty States Framework (Sec. 84, 139)

Every empty state must clearly answer three questions:
1. **What happened?** (Current state)
2. **Why?** (Context)
3. **What can I do next?** (Clear next step)

### Examples:
- **No Placement Applications**:
  > **No applications yet.**  
  > Applications you submit for campus drives will appear here.  
  > `[Explore Active Drives]`
- **No Interviews Scheduled**:
  > **No interviews scheduled.**  
  > Shortlisted candidates will receive interview time slots once the technical round begins.  
  > `[View Shortlisted Students]`
- **No Search Results**:
  > **No records found matching "Quantum Computing".**  
  > Check your spelling or try searching by student roll number, faculty name, or course code.

---

## 4. Confirmation Dialogues (Sec. 140)

Destructive actions must use explicit, unambiguous confirmation language:

> **Delete this placement drive?**  
> This will cancel the hiring funnel and notify 184 registered students. This action cannot be undone.  
> `[Cancel]` `[Delete Drive]`

---

## 5. Error Copy Framework (Sec. 85, 132)

Errors must be written for humans, never exposing raw database tracebacks as primary UI:

- **Good**: *"We couldn't load active job drives. Please check your network connection."* `[Try again]`
- **Good (Validation)**: *"Attendance cannot exceed 100%."*
- **Good (Eligibility)**: *"You are currently not eligible for Google SDE because your attendance is 71.2% (required: 75.0%)."*
- **Bad**: *"Error 500: Internal server error occurred at line 204."*

---

## 6. Security & Privacy Labels (Sec. 109, 110)

ARC labels data visibility explicitly so students and faculty know who has access:

- **`Private`**: Visible only to the student and their authorized faculty mentor.
- **`Institution Only`**: Accessible to HOD, Dean, and verified campus leadership.
- **`Recruiter Visible`**: Shared with external verified employer partners with student consent.
- **`Institution Verified`**: Signed off with tamper-proof cryptographic authenticity by the university registrar.
- **`Integration Verified`**: Live sync authenticated via OAuth (e.g. GitHub, LeetCode, LinkedIn).
