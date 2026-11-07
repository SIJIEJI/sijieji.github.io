# AI for Bio

**Build AI. Debug It. Advance It Through Biology.**

Proposed 14-week interdisciplinary course designed by Sijie Ji (November 2026).

**Audience:** Upper-level undergraduate and early graduate students in Biology, Bioengineering, BME, Neuroscience and Computer Science.  
**Format:** Two 75-minute classes and one 90-minute studio per week; approximately 5–7 hours of independent work.  
**Entry expectations:** Basic Python, introductory statistics, vectors, derivatives and basic biology. Prior ML coursework is not required.  
**Course status:** Proposed design, not an offered class.

## Teaching purpose

Students learn to construct and debug AI models, draw appropriately limited conclusions from biological data, and turn biological mechanisms into falsifiable algorithmic ideas. *Biology → AI* and *AI → Biology* are distinct but mutually enriching directions. Biological analogies are not, by themselves, evidence of mechanistic equivalence.

## Measurable learning outcomes

1. Translate a biological, physiological, behavioral or cognitive question into explicit measurements, labels and assumptions.
2. Derive and implement a small neural network and compare it with an appropriate statistical baseline.
3. Diagnose optimization, data-processing and evaluation failures through controlled experiments.
4. Design subject-, batch- or time-aware evaluations and assess uncertainty under distribution shift.
5. Translate a justified biological mechanism into an algorithmic hypothesis and test an ablation.
6. Model hidden physiological states, noisy observations and the cost of additional measurements in a toy system.
7. Communicate reproducible results and distinguish analogy, prediction, mechanism and causal evidence.

## Four phases

- **Weeks 1–5 · Understand & debug AI (Foundations):** Formalize biological questions; build models; diagnose leakage, optimization and evaluation failures. **Student output:** A validated baseline and an evidence-based debugging dossier.
- **Weeks 6–9 · Learn design principles from biology (Biology → AI):** Translate feedback, structure and memory into computational hypotheses; test them against controls. **Student output:** A biological mechanism-to-algorithm map and controlled ablation.
- **Weeks 10–12 · Understand human measurements (AI → Biology):** Model context, hidden states, personalization and the value of further sensing. **Student output:** A state estimator and cost-aware sensing analysis, with stated limits.
- **Weeks 13–14 · Defend a scientific claim (Synthesis):** Reproduce a result, challenge a shortcut and communicate both positive and negative evidence. **Student output:** A reproducible capstone and individual oral defense.

## Weekly syllabus

### Week 01 · A shared language for biology and AI (Foundations)

**Driving question:** What is learned, what is measured, and what is assumed?

- **Class A:** Translate biological questions into measurable inputs, targets, prediction times, and units of analysis. Separate explanatory aims from predictive tasks.
- **Class B:** Learning, optimization and inductive bias. Introduce neural computation, adaptation and feedback as productive—but limited—analogies.
- **Studio / experiment:** Audit a small synthetic dataset for units, missingness, repeated subjects, and uncertain labels; write a data dictionary.
- **Reading / preparation:** ISLP, statistical learning overview; scikit-learn, common pitfalls.
- **Due / checkpoint:** Ungraded readiness check and a one-page scientific problem formulation.

### Week 02 · From measurements to learnable data (Foundations)

**Driving question:** Could a model learn the experiment rather than the biology?

- **Class A:** Sampling, sensor noise, biological variability, acquisition artifacts and nuisance variables in signals, images and molecular measurements.
- **Class B:** Train/validation/test sets; participant-, batch- and time-aware splits; preprocessing learned only from training data.
- **Studio / experiment:** Compare sample-random and subject-held-out splits on repeated synthetic measurements. Trace identity shortcuts and leakage.
- **Reading / preparation:** scikit-learn, common pitfalls; featured subject-leakage demonstration.
- **Due / checkpoint:** Data audit and split manifest for formative feedback.

### Week 03 · Build a model you can explain (Foundations)

**Driving question:** What can a strong baseline teach us before deep learning?

- **Class A:** Linear/logistic regression, loss functions, regularization, simple derivatives and one gradient update.
- **Class B:** Gradient descent, scaling, convergence diagnostics and an illustrative dose-response fitting task without mechanistic overclaiming.
- **Studio / experiment:** Start Lab 1: implement a small multilayer perceptron in NumPy and compare gradients with autograd.
- **Reading / preparation:** ISLP, regression and classification; PyTorch, tensors and optimization.
- **Due / checkpoint:** Concept check 1 (5%): loss, gradients, appropriate prediction targets.

### Week 04 · Train, inspect, debug (Foundations)

**Driving question:** Why can a model appear successful and still be wrong?

- **Class A:** Backpropagation, activation functions, learning curves, underfitting and overfitting; compare a network with a regularized baseline.
- **Class B:** Diagnose label mistakes, learning-rate instability, preprocessing leakage and train/evaluation-mode errors.
- **Studio / experiment:** Complete Lab 1: reproduce planted failures, state a hypothesis, change one factor, and document before/after evidence.
- **Reading / preparation:** PyTorch tutorials; scikit-learn, leakage and reproducibility.
- **Due / checkpoint:** Lab 1 (10%): first neural network and debugging dossier.

### Week 05 · Evaluate a scientific claim (Foundations)

**Driving question:** What result would change your interpretation?

- **Class A:** Class imbalance, precision/recall, AUROC/AUPRC, regression errors and matching metrics to scientific questions.
- **Class B:** Grouped cross-validation, calibration, uncertainty, and participant-level resampling. Discuss why discrimination does not imply usefulness.
- **Studio / experiment:** Review a small public ECG dataset case and its documentation; design a patient-aware evaluation. No model training on private data.
- **Reading / preparation:** ISLP, resampling; PTB-XL documentation and recommended patient-level folds.
- **Due / checkpoint:** Capstone proposal (5%): biological question, proposed mechanism, baseline, split, metric and feasibility.

### Week 06 · Feedback as a computational design principle (Biology → AI)

**Driving question:** Can homeostasis inspire robust computational rules?

- **Class A:** Biological negative feedback, state variables, observation variables, differential equations, equilibria and local stability; use a simplified gene circuit.
- **Class B:** Abstract feedback into a transparent controller or adaptive correction term; state the hypothesized robustness gain and possible failure conditions.
- **Studio / experiment:** Start Lab 2: simulate gene regulation, apply a disturbance, and compare feedback against a matched no-feedback design.
- **Reading / preparation:** Uri Alon, An Introduction to Systems Biology, selected feedback chapters; introductory ODE notes.
- **Due / checkpoint:** Concept check 2 (5%): states, observations, stability and biological analogy.

### Week 07 · Mechanistic priors and model mismatch (Biology → AI)

**Driving question:** When does a biological constraint help—and when does it hurt?

- **Class A:** Black-box, mechanistic and hybrid models; constraints and inductive biases that are motivated by evidence rather than convenience.
- **Class B:** Identifiability, sensitivity analysis, model mismatch, hypothesis-driven ablation and what a good prediction does not establish.
- **Studio / experiment:** Complete Lab 2: fit the toy system to noisy trajectories; ablate the feedback term; challenge it using a deliberately wrong prior.
- **Reading / preparation:** Uri Alon, selected regulatory-circuit examples; ISLP, regularization and model selection.
- **Due / checkpoint:** Lab 2 (10%): algorithmic hypothesis, matched baseline, perturbation and mismatch analysis.

### Week 08 · Biological organization and learned representations (Biology → AI)

**Driving question:** Can modularity or invariance motivate a useful model design?

- **Class A:** Biological organization at different scales; modular responses, stability and context-dependence. Explicitly distinguish phenomena from computation analogies.
- **Class B:** Representation learning and invariance: PCA, simple autoencoders and modular feature groups. Propose one biologically motivated design constraint.
- **Studio / experiment:** Compare a simple shared representation with a structured representation on simulated multimodal measurements; ablate the constraint under a context shift.
- **Reading / preparation:** ISLP, unsupervised learning; a short instructor-provided note on biological modularity and testable inductive bias.
- **Due / checkpoint:** Capstone baseline (5%): runnable code, split manifest and initial failure analysis.

### Week 09 · Memory and continual adaptation (Biology → AI)

**Driving question:** Can a memory-inspired rule reduce forgetting?

- **Class A:** Biological memory and stability–plasticity as inspiration; limitations of mapping neural/immune memory to machine learning.
- **Class B:** Catastrophic forgetting, rehearsal/replay, regularization and retention–adaptation tradeoffs. Match model capacity, examples and compute.
- **Studio / experiment:** Start Lab 3: train on sequential synthetic environments; compare fine-tuning with replay and a frozen reference.
- **Reading / preparation:** Kirkpatrick et al. (2017), Overcoming catastrophic forgetting in neural networks; reading on biological analogy limits.
- **Due / checkpoint:** Concept check 3 (5%): adaptation, retention, controls and negative results.

### Week 10 · Personalization, behavior and context (AI → Biology)

**Driving question:** Is the model tracking physiology or a change in context?

- **Class A:** Between-person differences, within-person change, behavioral proxies, missing modalities, confounding and measurement context.
- **Class B:** Population vs personalized models; establish a calibration period; evaluate on later observations and on held-out environments.
- **Studio / experiment:** Complete Lab 3: test context shortcuts, quantify forgetting, and report matched resource costs and multiple random seeds.
- **Reading / preparation:** Kirkpatrick et al.; scikit-learn, leakage and evaluation protocols.
- **Due / checkpoint:** Lab 3 (10%): adaptation/retention curves, context audit and compute accounting.

### Week 11 · Modeling hidden physiological states (AI → Biology)

**Driving question:** What can incomplete sensor measurements actually identify?

- **Class A:** States, dynamics and observation pathways. Introduce linear state-space models, sensing noise and partial observability.
- **Class B:** Filtering, uncertainty and the limitations of physiological interpretation. A toy state estimator is not by itself a clinical digital twin.
- **Studio / experiment:** Start Lab 4: simulate hidden physiological states and noisy sensors; implement a provided Kalman-filter scaffold and direct regression baseline.
- **Reading / preparation:** Särkkä & Svensson, Bayesian Filtering and Smoothing (selected sections); linear-state equations.
- **Due / checkpoint:** Capstone mechanism test (10%): ablation, sensitivity analysis and claim–evidence table.

### Week 12 · Active sensing: measure, predict, decide (AI → Biology)

**Driving question:** When is another observation worth its cost?

- **Class A:** Uncertainty-aware measurement selection, missing observations, acquisition cost, and periodic, random vs adaptive sampling.
- **Class B:** Prediction versus intervention; simulation assumptions; why improved state estimation does not establish clinical benefit.
- **Studio / experiment:** Complete Lab 4: compare filtering error, uncertainty and sensing cost at matched budgets; introduce model mismatch and sensor dropout.
- **Reading / preparation:** Särkkä & Svensson, selected filtering sections; course notes on active sensing controls.
- **Due / checkpoint:** Lab 4 (10%): state estimation and sensing policy. Concept check 4 (5%).

### Week 13 · Trustworthy biological AI (Synthesis)

**Driving question:** Can another team reproduce and challenge your result?

- **Class A:** Prediction versus explanation; uncertainty, fairness, data privacy and scientifically defensible conclusions.
- **Class B:** Generative assistants and foundation models: transfer, contamination, hallucination, and unverified biological claims.
- **Studio / experiment:** Peer audit another team’s code and documentation; identify an overlooked shortcut or alternative explanation.
- **Reading / preparation:** Dataset and model documentation used in the capstone; scikit-learn, common pitfalls.
- **Due / checkpoint:** Capstone reproducible report (10%): six pages, code, environment, data provenance and limitations.

### Week 14 · Biology-to-AI Innovation Challenge (Synthesis)

**Driving question:** Did the biological idea improve an algorithm—and how do we know?

- **Class A:** Team presentations: biological mechanism → algorithmic hypothesis → implementation → ablation → evidence and limits.
- **Class B:** Individual oral defense: explain a failure, a competing explanation, an unsupported claim and the next useful experiment.
- **Studio / experiment:** Capstone symposium and cross-disciplinary review. Well-supported negative results count as scientific progress.
- **Reading / preparation:** Peer project reports; no additional required readings.
- **Due / checkpoint:** Presentation and individual oral defense (5%); submit a contribution statement.

## Four laboratories (40% of the total grade)

### Lab 01 · Train and Debug Your First Neural Network (Weeks 3–4, 10%)

**Data/context:** Synthetic labeled measurements with repeated subjects.

- **Build:** Implement a two-layer neural network, check gradients numerically, and benchmark against a linear model.
- **Test and debug:** Diagnose a mis-set learning rate, incorrect labels and preprocessing leakage using controlled repairs.
- **Deliver:** Notebook, split manifest, learning curves and a two-page debugging dossier.

### Lab 02 · From Biological Feedback to a Robust Computational Rule (Weeks 6–7, 10%)

**Data/context:** Toy gene-expression dynamics with controlled perturbations.

- **Build:** Abstract negative feedback into an explicit computational rule; compare with a no-feedback baseline.
- **Test and debug:** Ablate feedback gain, perturb the dynamics and test when the assumed mechanism is wrong.
- **Deliver:** Equations, simulation code, matched controls, perturbation plots and a claim–evidence table.

### Lab 03 · Memory-Inspired Learning under Change (Weeks 9–10, 10%)

**Data/context:** Sequential synthetic environments with context shifts.

- **Build:** Compare frozen models, fine-tuning and a memory-inspired replay strategy with equal training budgets.
- **Test and debug:** Quantify retention, adaptation, context shortcuts and resource costs across random seeds.
- **Deliver:** Retention/adaptation curves, ablation, resource accounting and reproducible configuration.

### Lab 04 · Hidden-State Estimation and Active Sensing (Weeks 11–12, 10%)

**Data/context:** Simulated physiological states and noisy observations.

- **Build:** Estimate latent states with a provided linear-filter scaffold; compare direct prediction and adaptive sensing policies.
- **Test and debug:** Hold out trajectories, control measurement budget, test sensor dropout and state-model mismatch.
- **Deliver:** State/observation equations, estimation errors, uncertainty coverage, sensing-cost analysis and limitations.

**Common laboratory rubric:** Implementation and understanding 30%; debugging and controlled tests 30%; valid evaluation 25%; interpretation and reproducibility 15%.

## Biology-to-AI Innovation Challenge (35%)

Teams of two or three follow: **biological mechanism → computational hypothesis → implementation → baseline and ablation → evidence and limitations**. Publication-level novelty is not expected. A rigorous negative result is a valid scientific outcome.

- **Memory & Adaptation:** Biological starting point: Neural or immune memory as biological inspiration. Approach: Implement a memory/replay or stabilization rule. Compare with sequential fine-tuning and a simple replay baseline under equal data and compute. Decisive test: Ablate the memory component; report retention and adaptation.
- **Homeostasis & Robustness:** Biological starting point: Negative feedback in biological regulation. Approach: Implement a feedback-inspired correction or constraint. Compare with an unconstrained model and test perturbations. Decisive test: Ablate the feedback term; test stability and model mismatch.
- **Selective Sensing:** Biological starting point: Biological sensory gating or selective attention as inspiration. Approach: Turn a selective-attention hypothesis into a budgeted measurement policy. Compare with periodic and random sensing. Decisive test: Ablate the selection rule at matched sensing cost.
- **Organization & Generalization:** Biological starting point: Modularity or invariance in biological organization. Approach: Implement a modular or invariant representation motivated by a specific phenomenon. Compare with an unstructured model. Decisive test: Remove the proposed structure and evaluate held-out contexts.

**Project milestones:** Week 5 proposal (5%); Week 8 baseline (5%); Week 11 mechanism test (10%); Week 13 reproducible report (10%); Week 14 presentation and individual defense (5%).

**Capstone requirement:** A Biology-to-AI capstone must state the biological source, justify the computational abstraction, implement a change and ablate it. An AI application to biomedical data alone does not satisfy this requirement.

## Grading

| Component | Course grade |
| --- | ---: |
| Four laboratories | 40% |
| Four individual concept checks | 20% |
| Staged capstone | 35% |
| Participation and peer review | 5% |
| **Total** | **100%** |

## Practical teaching and academic integrity

Assignments use small, CPU-friendly Python, NumPy, pandas, matplotlib, scikit-learn and PyTorch notebooks. Generative AI may be used for coding/explanation with disclosure and independent verification, but not in individual knowledge checks or oral defenses. No restricted data may be uploaded to external services. Students document code environments, versions, data provenance, licenses, random seeds and split manifests. Each student must be able to explain the submitted work. Accessibility and institutional policies will be specified for an actual course offering.

## Assigned and suggested resources

- **Core ML:** [An Introduction to Statistical Learning with Applications in Python](https://www.statlearning.com/). James, Witten, Hastie, Tibshirani & Taylor. Statistical learning, evaluation and Python laboratories.
- **Debugging:** [scikit-learn: Common pitfalls and recommended practices](https://scikit-learn.org/stable/common_pitfalls.html). Official guide to leakage, preprocessing, splitting and reproducibility.
- **Implementation:** [PyTorch: Learn the Basics](https://docs.pytorch.org/tutorials/beginner/basics/intro.html). Official tutorials for tensors, autograd, optimization and model building.
- **Biological theory:** An Introduction to Systems Biology: Design Principles of Biological Circuits. Uri Alon. Selected sections on negative feedback, regulatory circuits and biological design principles.
- **Research paper:** [Overcoming catastrophic forgetting in neural networks](https://arxiv.org/abs/1612.00796). Kirkpatrick et al. (2017). Research discussion on continual learning and the limits of biological analogy.
- **State estimation:** Bayesian Filtering and Smoothing. Simo Särkkä and Lennart Svensson. Selected sections on state-space models and filtering.
- **Real-world data:** [PTB-XL ECG Dataset (PhysioNet)](https://physionet.org/content/ptb-xl/1.0.3/). Optional authentic-data exercise; respect license, patient-level folds and citation instructions.

## Demonstration artifact

`assets/subject_leakage_demo.ipynb` is an executed synthetic example of how repeated participant-level measurements can lead to data leakage under random sample splitting. No patient data or student results are represented. It uses seed 42, 300 simulated participants and six readings per participant. It is teaching material rather than an estimate of real-world clinical performance.

## Material availability

This proposed course includes syllabus, laboratory and project specifications, and one reproducible synthetic debugging example. Slides, recordings, comprehensive starter notebooks, solutions and student outcome data have not been produced for an actual offering.