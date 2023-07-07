# 远程团队代码管理工具


这一篇目，是只为程序员们设计的。虽然我们已经习惯了使用 Github 来存储代码，但是，如果你做的是企业协作场景，那么可能有更多更适合的代码托管平台。


## 总览

|名称|费用|团队协作|自动化|服务集成|
| | | | | | 
|Github Pro| $7/月  	|无限人数|内建CI/CD|支持|
|GitLab.com|$4/人/月|-|内建CI/CD||
|GitLab|服务器成本|无限|自建 Jenkins||
|BitBucket|$3/人/月|-|内建 CI||
|Gitee|1280/年|10人|自建 Jenkins|华为容器云/华为微服务/Tencent Hub|
|Coding|399/人/年|-|内建 CI|自建 Registry|


> 上述平台均提供了免费版本，表内为最低付费版本价格。

## 代码管理工具特性

和 Github 上我们更关注影响力不同，在远程工作团队协作时，我们更看重以下几点：

1. **私有仓库**：无论你是一个远程团队，还是一个坐班的团队，你的代码库很难做到完全 100% 的开放。出于安全考虑，你总会有一部分代码是没有对外开放的。因此，私有库是必要的。
2. **团队协作**：由于你是团队，而不是个人，那么团队协作一定是一个重点。Github 免费版私有仓库虽然也提供了 3 个人的协作名额，但是由于 3 个人实在太少，而且缺乏其他的必备能力，因此不在本次的讨论范围内。
3. **自动化手段**：对于代码项目来说，必要的自动化手段可以帮助开发者更好的完成自己的工作，减少工作的压力。因此，自动化手段也是一个非常重要的能力。

## 工具清单

### 1. Github Pro

Github Pro 是 Github 提供的服务计划，可以提供非常多的功能特性。使用 Github Pro ，可以为团队提供最好的 Git 生态。在 Github 推出了自家的 CI 服务 Github Actions 后， 除了速度慢，几乎是无敌的。

### 2. GitLab.com

GitLab.com 是目前比较好的 Git 托管服务，相比于 Github 提供了一定的免费计划。也提供了自建的 CI/CD 工具，十分方便。

### 3. Gitlab

对于一些喜欢私有部署的企业来说，GitLab 的开源版本可能会更加适合。

### 4. BitBucket

BitBucket 是来自 Atlassian 公司的代码托管平台，值得你去试一试。

### 5. Gitee

Gitee 是来自国内开源中国的产品，速度方便不错，但产品的各项能力方面，有待改进。

### 6. Coding

Coding 的企业版本提供了非常多的能力，我目前也在用他。