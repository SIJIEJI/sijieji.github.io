# AI for Bio

## Foundations, Debugging and Biology-Inspired Intelligence

Proposed course by Sijie Ji · Curriculum version: November 1, 2026. This is a course design, not an announced institutional offering. Calendar dates, course number, credits and enrollment arrangements are to be set by the host institution. The schedule, labs and grading below are proposed.

## Course description

AI for Bio connects the foundations of machine learning with the systems that biology studies: systems that sense, adapt, regulate and learn. Students build models, diagnose their failures and evaluate what their outputs mean scientifically. A second direction asks how biological principles can become testable ideas for better AI.

Biology and AI have a productive, two-way relationship. The course treats biological inspiration as a source of explicit hypotheses, not as proof that an algorithm reproduces biological intelligence.

## Learning outcomes

1. Formulate a biological, physiological, behavioral or cognitive question as a learning problem with explicit measurements, targets and assumptions.

2. Derive and implement a small neural network, explain its loss and gradients, and compare it with a suitable statistical baseline.

3. Diagnose training, data and evaluation failures through controlled experiments and interpretable debugging evidence.

4. Design leakage-aware evaluation across people, batches and time, and quantify uncertainty and failure under distribution shift.

5. Translate a biological mechanism into a computational hypothesis, implement a model change and test it with an ablation.

6. Build and critically assess a small dynamical model that connects sensing, hidden states and adaptive measurement.

7. Communicate reproducible results with a clear distinction between prediction, mechanism, analogy and causal evidence.

## Format and policies

### Preparation and access

Designed for upper-level undergraduates and early graduate students in biology, bioengineering, BME, neuroscience or CS. Basic Python, introductory probability/statistics and familiarity with vectors, derivatives and basic biology are expected. Prior ML is not required. A preparatory Python/NumPy and linear-algebra refresher is recommended; students can take either a biological or computational role while rotating responsibilities.

### Weekly rhythm and tools

Proposed 14-week format: two 75-minute class meetings and one 90-minute studio each week, plus about 5–7 hours of independent work. Use Python, NumPy, pandas, matplotlib, scikit-learn and PyTorch in Jupyter. Core assignments use small CPU-friendly synthetic data; a GPU and paid AI subscription are not required. Official credits and workload must be set by the host institution.

### Assessment and collaboration

Four labs contribute 40%; four individual concept checks contribute 20%; the staged capstone contributes 35%; participation and peer review contribute 5%. Labs may be completed in pairs with individual debugging reflections. Capstones use teams of 2–3 with explicit roles and an individual defense. Participation can be demonstrated through written review as well as discussion.

### AI tools and academic integrity

Generative tools may be used for explanation and coding assistance when disclosed. Submit a short record of material use, verify generated code and citations, and explain every submitted component. Individual concept checks and oral defenses are completed without generative assistance. Never upload restricted data to an external tool. Evaluation rewards justified decisions and evidence; model output alone is not evidence.

### Data and reproducibility

Default to synthetic or appropriately licensed public data. Keep subjects, experimental batches and future observations separated as required by the question. Document data versions, licenses, seeds, preprocessing, splits and software dependencies. PTB-XL is optional: follow its source documentation, patient-level folds and citation requirements. No new human-subject data collection is required.

### Feedback and inclusion

Use a diagnostic readiness check, weekly low-stakes feedback and scheduled project checkpoints. As a proposed default, allow three 24-hour grace days across lab submissions; arrange other extensions with the instructor. Provide accessible notebooks, readable figures, written alternatives to live participation and accommodations under the host institution’s process. Meeting times, office hours and institutional policies will be specified for an actual offering.

## Assessment

| Component | Weight | Timing |
| --- | ---: | --- |
| Labs 1–4 | 40% | Weeks 4, 7, 10, 12; 10% each |
| Individual concept checks | 20% | Weeks 3, 6, 9, 12; 5% each |
| Capstone | 35% | Weeks 5, 8, 11, 13, 14 |
| Participation and peer review | 5% | Throughout the term |

Lab rubric (each lab): implementation and model understanding 30%; debugging and controlled checks 30%; valid evaluation 25%; interpretation and reproducibility 15%. Concept checks assess derivation, diagnosis and scientific interpretation. Participation is assessed through substantive feedback, preparation and peer audits.

## Weekly schedule

Weekly preparation below names available external readings or a specific mathematical preparation task. Lecture notes, assignment starter notebooks and solutions are planned teaching materials, not included in this syllabus release.

### Week 01 — A shared language for biology and AI

**Module:** Foundations

**Guiding question:** What is learned, what is measured, and what is assumed?

**Class A:** Turn a biological question into inputs, targets, a prediction time and a unit of analysis. Separate a scientific explanation from a predictive association.

**Class B:** Introduce learning, optimization and inductive bias through neural computation, adaptation and feedback. Identify where each analogy breaks.

**Studio:** Audit a small synthetic dataset for missing values, units, repeated subjects and unreliable labels; write a data dictionary.

**Preparation:** ISLP: statistical learning overview; scikit-learn: common pitfalls.

**Due / checkpoint:** Ungraded readiness check and a one-page problem formulation.

### Week 02 — From measurements to learnable data

**Module:** Foundations

**Guiding question:** Could the model learn the experiment instead of the biology?

**Class A:** Sampling, noise, artifacts, feature construction and nuisance variables in signals, images and molecular measurements.

**Class B:** Train/validation/test roles; subject-, batch- and time-aware splitting; preprocessing fit only on training data.

**Studio:** Compare a sample-random split with a subject-held-out split on synthetic repeated measurements. Check subject ID and acquisition-order shortcuts.

**Preparation:** scikit-learn: inconsistent preprocessing, data leakage and controlling randomness.

**Due / checkpoint:** Data audit and split manifest for feedback; no graded submission.

### Week 03 — Build a model you can explain

**Module:** Foundations

**Guiding question:** What does a useful baseline tell us before deep learning?

**Class A:** Linear and logistic regression, loss functions, decision boundaries and regularization; derive a gradient update.

**Class B:** Gradient descent, scaling and optimization diagnostics. Connect parameter fitting to a simple biological dose-response example without claiming mechanism.

**Studio:** Start Lab 1: implement a small multilayer perceptron and gradient updates in NumPy, then compare with autograd.

**Preparation:** ISLP: regression and classification; PyTorch: tensors, autograd and optimization.

**Due / checkpoint:** Concept check 1 (5%): loss, gradients and prediction tasks.

### Week 04 — Train, inspect, debug

**Module:** Foundations

**Guiding question:** Why can a model look successful and still be wrong?

**Class A:** Backpropagation, activation functions, underfitting, overfitting and learning curves; compare a neural network with a regularized baseline.

**Class B:** Diagnose shape/label errors, unstable learning rates, preprocessing leakage and train/evaluation mode mistakes.

**Studio:** Complete Lab 1: reproduce planted failures, form a diagnosis, change one factor at a time and document the repair.

**Preparation:** ISLP: deep learning; PyTorch: building a model and optimization; scikit-learn: leakage.

**Due / checkpoint:** Lab 1 (10%): first neural network and debugging dossier.

### Week 05 — Evaluate a scientific claim

**Module:** Foundations

**Guiding question:** What evidence would change your conclusion?

**Class A:** Class imbalance, confusion matrices, precision/recall, AUROC, AUPRC and regression errors; choose a metric for the biological question.

**Class B:** Grouped cross-validation, tuning on validation data, calibration and subject-level bootstrap uncertainty. Distinguish discrimination from usefulness.

**Studio:** Evaluate a baseline and a tree model under identical splits; write a falsifiable capstone hypothesis and an evaluation plan.

**Preparation:** ISLP: resampling and tree-based methods; scikit-learn: common pitfalls.

**Due / checkpoint:** Capstone proposal (5% of course grade): question, mechanism, baseline, split, metric and data/compute plan.

### Week 06 — Biological dynamics and feedback

**Module:** Biology → AI

**Guiding question:** When do biological relationships become computational constraints?

**Class A:** States versus observations; differential equations, equilibrium and local stability. Use a simplified gene-regulation model as a teaching example.

**Class B:** Negative feedback, adaptation and time scales; translate a mechanism into a model component, constraint or testable prediction.

**Studio:** Start Lab 2: simulate gene expression with degradation and negative feedback; apply step disturbances and parameter changes.

**Preparation:** ISLP: regression review. Preparation: derive dx/dt = production(x, u) − degradation(x) and inspect its equilibria.

**Due / checkpoint:** Concept check 2 (5%): states, observations and feedback.

### Week 07 — Learning with mechanistic structure

**Module:** Biology → AI

**Guiding question:** Does adding biological knowledge improve the right thing?

**Class A:** Compare black-box, mechanistic and hybrid models; encode bounds, conservation or temporal smoothness only when scientifically justified.

**Class B:** Identifiability, model mismatch and ablation: distinguish a useful inductive bias from a correct biological explanation.

**Studio:** Complete Lab 2: fit model parameters to noisy simulated trajectories; compare feedback/no-feedback systems and test an incorrect prior.

**Preparation:** ISLP: regularization and model selection. Revisit the gene-regulation equations from Week 6.

**Due / checkpoint:** Lab 2 (10%): gene feedback model, disturbance response and model-mismatch analysis.

### Week 08 — Representations across biological scales

**Module:** Biology → AI

**Guiding question:** What information should a representation keep?

**Class A:** PCA, clustering and autoencoders; representations for molecular measurements, biomedical images, neural/behavioral signals and physiology.

**Class B:** CNNs, temporal models and self-supervised learning at a conceptual level. Match architecture and augmentations to the measurement process.

**Studio:** Compare features and learned representations on a small synthetic multimodal dataset; test a nuisance-variable ablation.

**Preparation:** ISLP: unsupervised learning and deep learning; PyTorch: model building.

**Due / checkpoint:** Capstone baseline reproduction (5%): runnable baseline, split manifest and initial failure analysis.

### Week 09 — Learning in an evolving environment

**Module:** Biology → AI

**Guiding question:** How can a learner adapt without losing what it knew?

**Class A:** Distribution shift, continual learning, catastrophic forgetting and stability/plasticity. Relate adaptation to biological learning with explicit limits.

**Class B:** Frozen models, fine-tuning and replay; temporal evaluation and retention/adaptation tradeoffs under a matched compute budget.

**Studio:** Start Lab 3: train on sequential synthetic environments; measure performance on both old and new environments after each update.

**Preparation:** Kirkpatrick et al.: Overcoming catastrophic forgetting in neural networks (author preprint).

**Due / checkpoint:** Concept check 3 (5%): representation, shift and forgetting.

### Week 10 — Personalization, behavior and context

**Module:** AI → Biology

**Guiding question:** Is the model detecting a state or a change in context?

**Class A:** Between-person variation, within-person change, context confounding and cognitive/behavioral proxy labels; limits of latent-state interpretation.

**Class B:** Population versus personalized models; separate a calibration period from future evaluation. Examine subgroup errors and missing modalities.

**Studio:** Complete Lab 3: compare frozen, fine-tuned and replay learners; stress-test a context shortcut and quantify forgetting.

**Preparation:** Kirkpatrick et al.: revisit evaluation; scikit-learn: leakage and randomness.

**Due / checkpoint:** Lab 3 (10%): adaptation/retention curves, context stress test and compute accounting.

### Week 11 — A mini digital twin as a scientific model

**Module:** AI → Biology

**Guiding question:** Which hidden states can our measurements actually identify?

**Class A:** Define a digital twin operationally: a personalized dynamical model updated by observations. Separate this from a generic predictor.

**Class B:** State-space models, filtering, observation models and uncertainty; observability and sensor placement in a simplified human–environment system.

**Studio:** Start Lab 4: simulate hidden physiological states and noisy sensors; implement a linear Kalman-filter baseline and compare with direct regression.

**Preparation:** PyTorch: implementation reference if needed. Preparation: derive the linear state and observation equations and one filtering update.

**Due / checkpoint:** Capstone mechanism test (10%): controlled ablation, sensitivity analysis and claim–evidence table.

### Week 12 — Measure, predict, decide

**Module:** AI → Biology

**Guiding question:** When should an intelligent system ask for another measurement?

**Class A:** Active sensing, missing observations, measurement cost and uncertainty-aware decisions; compare periodic and uncertainty-triggered sampling.

**Class B:** Prediction versus intervention; causal assumptions, counterfactual limits and why simulator success does not establish clinical benefit.

**Studio:** Complete Lab 4: compare state-estimation error, uncertainty coverage and sensing cost at matched budgets; introduce sensor failure or model mismatch.

**Preparation:** scikit-learn: evaluation pitfalls. Revisit Week 11 state-space equations and assumptions.

**Due / checkpoint:** Lab 4 (10%): mini twin and sensing policy. Concept check 4 (5%): state estimation and causal limits.

### Week 13 — Trustworthy biological AI

**Module:** Synthesis

**Guiding question:** Can someone else reproduce and challenge your result?

**Class A:** Interpretation versus explanation; uncertainty, bias, privacy, responsible data use and limits of scientific claims.

**Class B:** Foundation models and generative assistants: transfer, retrieval and generated hypotheses; inspect hallucination, contamination and unsupported conclusions.

**Studio:** Peer audit: run another team’s instructions, challenge a shortcut, inspect citations and write a reproducibility review.

**Preparation:** scikit-learn: common pitfalls; reread the source documentation for the capstone dataset and methods.

**Due / checkpoint:** Capstone report and reproducible artifact (10%): six-page report plus code, environment, data provenance and limitations.

### Week 14 — Biology-to-AI Innovation Challenge

**Module:** Synthesis

**Guiding question:** What did the experiment teach us about both biology and AI?

**Class A:** Team presentations: biological motivation → computational hypothesis → controlled evidence → boundary of the claim.

**Class B:** Individual oral defense and reflection: explain a model failure, an alternative explanation and the next informative experiment.

**Studio:** Capstone symposium and cross-disciplinary review. A well-supported negative result is a valid contribution.

**Preparation:** Peer project reports and method/dataset references; no new required reading.

**Due / checkpoint:** Presentation and individual defense (5%). Submit a final contribution statement.

## Laboratory briefs

### Lab 01 — Train and Debug Your First Neural Network

Weeks 3–4 · 10%

**Data:** Synthetic labeled measurements with repeated subjects.

**Build:** Implement a two-layer network, check a gradient numerically, and compare with a linear baseline and a PyTorch implementation.

**Test and debug:** Diagnose three planted failures: a bad learning rate, an incorrect label mapping and preprocessing leakage. Include before/after evidence and a held-out evaluation.

**Deliver:** Network notebook; loss/gradient plots; split manifest; a two-page debugging dossier.

### Lab 02 — Build a Gene Feedback Controller

Weeks 6–7 · 10%

**Data:** Simulated gene-expression trajectories with known parameters.

**Build:** Simulate negative feedback, fit parameters from noisy observations and compare disturbance recovery with a no-feedback model.

**Test and debug:** Vary time step, measurement noise and parameter values. Compare a correct constraint with a deliberately misspecified one; avoid interpreting the toy system as a validated cell model.

**Deliver:** Equations and assumptions; simulation code; recovery/stability plots; parameter and mismatch analysis.

### Lab 03 — Learn from an Evolving Environment

Weeks 9–10 · 10%

**Data:** Sequential synthetic environments with controlled context shifts.

**Build:** Compare a frozen model, sequential fine-tuning and a replay baseline using the same architecture and data budget.

**Test and debug:** Evaluate old and new environments after every update; report multiple seeds, adaptation, forgetting, context shortcuts and training cost.

**Deliver:** Learning curves by environment; method comparison; failure analysis; a reproducible experiment configuration.

### Lab 04 — Build a Mini Human Digital Twin

Weeks 11–12 · 10%

**Data:** Synthetic physiological states, contextual inputs and noisy sensor readings.

**Build:** Estimate hidden states with a linear filtering baseline; compare fixed-rate sensing with an uncertainty-triggered measurement policy.

**Test and debug:** Use matched measurement budgets and unseen trajectories. Report state error, interval coverage and measurement cost; stress-test sensor dropout and model mismatch.

**Deliver:** State/observation equations; estimator and sensing policy; error–cost analysis; a limitations statement.

## Capstone: Biology-to-AI Innovation Challenge

Each team translates a biological mechanism or human–environment interaction into a falsifiable computational hypothesis. Define what changes in the algorithm, what comparison tests that change, and what outcome would disconfirm the hypothesis. A rigorous negative result receives full consideration; publication-level novelty is not required.

### Suggested tracks

**Adaptation and memory:** Does a biologically motivated memory or regularization rule improve retention after a context shift? Compare against fine-tuning and a simple replay baseline; ablate the proposed mechanism and match data/compute.

**Feedback and robustness:** Can a justified feedback constraint improve robustness to a disturbance without concealing model mismatch? Use a transparent synthetic system; compare unconstrained and constrained models and perturb the assumed mechanism.

**Context and hidden states:** Does context improve estimation of a hidden state, or merely create a shortcut? Use held-out subjects or environments and a context-scrambling control; distinguish state estimation from diagnosis.

**Active measurement:** Can adaptive sensing reduce measurement cost while preserving estimation quality? Compare with periodic and random sampling at matched budgets; report uncertainty, failure modes and cost.

### Milestones and grading

| Due | Deliverable | Course weight |
| --- | --- | ---: |
| Week 5 | One-page proposal with hypothesis, baseline, data, evaluation and feasibility | 5% |
| Week 8 | Baseline reproduction with runnable code and failure analysis | 5% |
| Week 11 | Mechanism ablation and controlled experiment with uncertainty | 10% |
| Week 13 | Six-page report and reproducible artifact | 10% |
| Week 14 | Presentation, individual defense and contribution statement | 5% |

The report includes motivation, mechanism-to-algorithm mapping, methods, data provenance, evaluation, at least one ablation, results, limitations and the next informative experiment. References and a brief reproducibility appendix are outside the six-page limit. Submit a README, environment specification, split manifest and commands sufficient to reproduce the central result. Claims about causal mechanisms or clinical benefit require evidence beyond predictive performance or simulator results.

## Readings and data

- **[An Introduction to Statistical Learning with Applications in Python](https://www.statlearning.com/)** — James, Witten, Hastie, Tibshirani & Taylor (2023). Selected chapters and Python labs; the core statistical learning reference.

- **[scikit-learn: common pitfalls and recommended practices](https://scikit-learn.org/stable/common_pitfalls.html)** — Official documentation on preprocessing, leakage and reproducibility. Read alongside every modeling assignment.

- **[PyTorch: Learn the Basics](https://docs.pytorch.org/tutorials/beginner/basics/intro.html)** — Official tutorials for tensors, datasets, autograd, optimization and saving models. Use small CPU-friendly networks.

- **[Overcoming catastrophic forgetting in neural networks](https://arxiv.org/abs/1612.00796)** — Kirkpatrick et al., PNAS (2017), DOI: 10.1073/pnas.1611835114. Author preprint linked here; discuss retention, adaptation and limits of biological analogies.

- **[PTB-XL, version 1.0.3](https://physionet.org/content/ptb-xl/1.0.3/)** — Wagner et al., PhysioNet (2022). Optional ECG project dataset. Follow patient-level folds and the source license; cite both the dataset and its Scientific Data descriptor (2020).

## Material availability

This release contains the complete proposed syllabus and laboratory/project specifications. Lecture slides, recordings, starter notebooks, solutions and student results are not part of this release. Public reading links remain subject to their publishers’ and authors’ terms.
