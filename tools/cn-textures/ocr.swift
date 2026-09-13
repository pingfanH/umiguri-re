import Foundation
import Vision
import AppKit

var args = Array(CommandLine.arguments.dropFirst())
let lang = args.first ?? "en-US"
args.removeFirst()

for path in args {
    guard let img = NSImage(contentsOfFile: path),
          let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        print("=== \((path as NSString).lastPathComponent) === (load fail)")
        continue
    }
    let req = VNRecognizeTextRequest()
    req.recognitionLevel = .accurate
    req.recognitionLanguages = [lang]
    req.usesLanguageCorrection = false
    let handler = VNImageRequestHandler(cgImage: cg, options: [:])
    try? handler.perform([req])
    var lines: [(CGFloat, CGFloat, String)] = []
    for obs in (req.results ?? []) {
        if let top = obs.topCandidates(1).first {
            let bb = obs.boundingBox
            lines.append((1 - bb.midY, bb.minX, top.string))
        }
    }
    lines.sort { $0.0 < $1.0 || ($0.0 == $1.0 && $0.1 < $1.1) }
    print("=== \((path as NSString).lastPathComponent) ===")
    for l in lines { print(l.2) }
}
