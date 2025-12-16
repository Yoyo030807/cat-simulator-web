"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal } from "lucide-react";

// --- 代码数据 (保持不变) ---
const codeLevel10 = `// Level10Manager.cs
IEnumerator PlaySequence() {
    // 1. Preparation phase
    mouseInMouth.SetActive(true);
    mouseOnFloor.SetActive(false);
    
    // Move cat to start position
    catObject.transform.position = startPos.position;
    catObject.transform.LookAt(endPos);
    
    // 2. Movement Phase
    float duration = 3.0f;
    float timer = 0;
    while (timer < duration) {
        timer += Time.deltaTime;
        catObject.transform.position = Vector3.Lerp(
            startPos.position, 
            endPos.position, 
            timer / duration
        );
        yield return null;
    }

    // 3. The Swap Trick
    mouseInMouth.SetActive(false); 
    mouseOnFloor.SetActive(true);  
    
    uiPanel.SetActive(true); 
}`;

const codePetState = `// PetState.cs (Singleton)
public class PetState : MonoBehaviour {
    public static PetState Instance; 

    [Header("Vitals")]
    public float health = 100f;
    public float anxiety = 0f;

    void Awake() {
        // Singleton Pattern Enforcement
        if (Instance == null) Instance = this;
        else Destroy(gameObject);
        
        DontDestroyOnLoad(gameObject); 
    }

    public void UpdateStats(float h, float a) {
        health = Mathf.Clamp(health + h, 0, 100);
        anxiety = Mathf.Clamp(anxiety + a, 0, 100);
        UpdateUI(); 
    }
}`;

const codeTrigger = `// Window_Trigger.cs
void OnMouseDown() {
    // Prevent click-through on UI elements
    if (EventSystem.current.IsPointerOverGameObject()) return;

    // Visual Feedback: Show Safety Net
    if (safetyMesh != null) {
        safetyMesh.SetActive(true); 
        Debug.Log("Safety Mesh Installed!");
    }
    
    // Trigger Level Completion
    levelManager.CompleteLevel();
}`;

const scripts = [
    { id: "level10", name: "Level10Manager.cs", code: codeLevel10, desc: "Animation Logic" },
    { id: "petstate", name: "PetState.cs", code: codePetState, desc: "State Management" },
    { id: "trigger", name: "Window_Trigger.cs", code: codeTrigger, desc: "Interaction Logic" },
];

export default function CodeShowcase() {
    const [activeTab, setActiveTab] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(scripts[activeTab].code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container mx-auto px-4 py-32 relative">
            
            {/* 标题区域 */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
                    <Terminal size={12} />
                    <span>Source Code</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                    Core Mechanics
                </h2>
            </div>

            {/* --- 唯一的主代码窗口 (The One Window) --- */}
            {/* max-w-5xl: 限制最大宽度，防止太宽读起来累 */}
            <div className="max-w-5xl mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-[#333] ring-1 ring-black/50">
                
                {/* 1. 窗口顶部栏 (Header + Tabs) */}
                <div className="flex items-center bg-[#252526] border-b border-[#1e1e1e] overflow-x-auto no-scrollbar">
                    
                    {/* macOS 红绿灯 (装饰) */}
                    <div className="flex gap-2 px-4 sticky left-0 bg-[#252526] z-10 py-4 md:py-0">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                    </div>

                    {/* 标签页列表 */}
                    <div className="flex flex-1">
                        {scripts.map((script, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    relative px-6 py-3 text-xs font-mono border-r border-[#1e1e1e] transition-colors whitespace-nowrap
                                    ${activeTab === index 
                                        ? "bg-[#1e1e1e] text-white"  // 激活状态：深色背景，亮字
                                        : "bg-[#2d2d2d] text-gray-500 hover:bg-[#2a2a2b] hover:text-gray-300" // 未激活：稍浅背景，灰字
                                    }
                                `}
                            >
                                {/* 顶部高亮条 (VS Code 风格) */}
                                {activeTab === index && (
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500"></div>
                                )}
                                
                                <span className="flex items-center gap-2">
                                    <span className={activeTab === index ? "text-blue-400" : "text-gray-600"}>#</span>
                                    {script.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. 代码内容区域 */}
                <div className="relative bg-[#1e1e1e] min-h-[500px]">
                    {/* 复制按钮 */}
                    <button 
                        onClick={handleCopy}
                        className="absolute top-4 right-4 z-20 p-2 rounded-md bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all opacity-50 hover:opacity-100"
                        title="Copy Code"
                    >
                        {copied ? <Check size={16} className="text-green-400"/> : <Copy size={16}/>}
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="h-full"
                        >
                            <SyntaxHighlighter 
                                language="csharp" 
                                style={vscDarkPlus}
                                customStyle={{ 
                                    margin: 0, 
                                    padding: '2rem',
                                    paddingTop: '1.5rem',
                                    background: 'transparent',
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                                }}
                                showLineNumbers={true}
                                lineNumberStyle={{ minWidth: '3em', paddingRight: '1em', color: '#858585', textAlign: 'right' }}
                            >
                                {scripts[activeTab].code}
                            </SyntaxHighlighter>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}