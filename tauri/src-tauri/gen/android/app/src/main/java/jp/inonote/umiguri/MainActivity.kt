package jp.inonote.umiguri

import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.util.Log
import androidx.activity.enableEdgeToEdge
import java.io.File

class MainActivity : TauriActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    enableEdgeToEdge()
    super.onCreate(savedInstanceState)
    // 只检测, 不跳系统设置页(跳转会把自己切到后台, 表现为黑屏)。
    // 可写层优先 Documents/UMIGURI, 不可写时 Rust 侧会自动回退到
    // 应用外部私有目录 -> 内部 files, 游戏仍可正常运行。
    checkDocumentsWritable()
  }

  private fun checkDocumentsWritable() {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.R) return
    try {
      val docs = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS)
      val dir = File(docs, "UMIGURI")
      dir.mkdirs()
      val probe = File(dir, ".umg_probe")
      probe.writeText("1")
      probe.delete()
      Log.i("umiguri", "Documents writable: ${dir.absolutePath}")
    } catch (e: Exception) {
      Log.w("umiguri", "Documents not writable, will fall back: ${e.message}")
    }
  }
}
